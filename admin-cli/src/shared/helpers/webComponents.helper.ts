export const addElementToRef = (webComponent: any, clear?: boolean, element?: any): void => {
  if (clear) {
    document.getElementById(webComponent.parent).innerHTML = '';
  }
  const content = (element || document).querySelector(`#${webComponent.parent}`);
  content.insertAdjacentHTML(webComponent.position, webComponent.html);
};

export const addScriptTag = (names: Array<string>): void => {
  (names || []).forEach((webComponent: string) => {
    const scriptId = `${webComponent}_script`;
    const tmpScript = document.getElementById(scriptId);
    if (!tmpScript) {
      const scriptTag = document.createElement(`script`);

      scriptTag.setAttribute('src', `assets/web-components/${webComponent}/main.js`);
      scriptTag.setAttribute('type', 'text/javascript');
      scriptTag.setAttribute('id', `${webComponent}_script`);
      scriptTag.setAttribute('class', `web_component`);

      document.body.appendChild(scriptTag);
    }
  });
};