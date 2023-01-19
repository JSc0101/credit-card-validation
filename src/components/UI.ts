class UI {
  constructor() {}

  public card(): void {
    const $root = document.getElementById("app") as unknown as HTMLDivElement;
    $root.className = 'bg-zinc-800 h-screen';

    const $section = document.createElement("section");
    $section.className = '';

    const $card = document.createElement("div");
    $card.className = '';

    $section.append($card);
    $root?.append($section);
  }
  public form(): void {}
}

export { UI };
