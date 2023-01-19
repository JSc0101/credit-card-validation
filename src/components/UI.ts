class UI {
  constructor() {}

  public card(): void {
    const $root = document.getElementById("app") as unknown as HTMLDivElement;
    $root.className = 'bg-zinc-800 h-screen flex justify-center items-center';

    const $section = document.createElement("section");
    $section.className = 'w-10 h-10 bg-red-800 p-10';

    const $card = document.createElement("div");
    $card.className = '';

    $section.append($card);
    $root?.append($section);
  }
  public form(): void {}
}

export { UI };
