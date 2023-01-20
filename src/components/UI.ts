class UI {
  constructor() {}

  public root(): HTMLElement {
    const $root = document.getElementById("app") as unknown as HTMLDivElement;
    $root.className = "bg-zinc-800 h-screen flex justify-center items-center";

    const $container = document.createElement("section");
    $container.className = "w-full";
    const $card = document.createElement("div");
    $card.className =
      "w-96 h-56 rounded-md	 bg-zinc-500 shadow-lg shadow-zinc-500/50 flex flex-col items-start justify-end pb-5 gap-2";

    const $num = document.createElement("p");
    $num.textContent = "#### #### #### ####";
    $num.className = "text-purple-800 text-3xl w-max p-3";

    const $name = document.createElement("p");
    $name.className = "text-purple-800 text-2xl p-3";
    $name.textContent = "Johan Sebastian";

    const $containerForm = document.createElement("div");

    $container.appendChild($card).appendChild($num);
    $card.appendChild($name);
    $container.appendChild($containerForm);
    $root.appendChild($container);
    return $container;
  }
}

export { UI };
