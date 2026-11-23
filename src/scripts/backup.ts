// 진도·메모·하이라이트 등 `aac:` 로 시작하는 localStorage 키를 JSON 파일로 내보내고 불러온다.
const PREFIX = 'aac:';

export function exportProgress(): boolean {
  const dump: Record<string, string> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)!;
      if (k.startsWith(PREFIX)) dump[k] = localStorage.getItem(k) || '';
    }
  } catch {
    return false;
  }
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ai-agent-course-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  return true;
}

/** 불러온 항목 수를 반환한다. 파일이 올바르지 않으면 예외를 던진다. */
export async function importProgress(file: File): Promise<number> {
  const data = JSON.parse(await file.text());
  if (!data || typeof data !== 'object') throw new Error('invalid');
  let n = 0;
  for (const [k, v] of Object.entries(data)) {
    if (!k.startsWith(PREFIX) || typeof v !== 'string') continue;
    try {
      localStorage.setItem(k, v);
      n++;
    } catch {}
  }
  return n;
}

export function toast(text: string) {
  let el = document.getElementById('aac-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'aac-toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.classList.add('aac-show');
  clearTimeout((el as any)._t);
  (el as any)._t = setTimeout(() => el!.classList.remove('aac-show'), 2200);
}
