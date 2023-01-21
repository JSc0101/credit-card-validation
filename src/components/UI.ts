import Validator from "../controllers/validator";
class UI {
  constructor() {}

  public root(): HTMLElement {
    const $root = document.getElementById("app") as unknown as HTMLDivElement;
    $root.className = "bg-zinc-800 h-screen flex justify-center items-center";

    const $container = document.createElement("section");
    $container.className = "w-full flex flex-col items-center";

    const $card = document.createElement("div");
    $card.className =
      "w-96 h-56 rounded-md	 bg-zinc-500 shadow-lg shadow-zinc-500/50 flex flex-col items-start justify-end pb-5 gap-1 p-10";

    const $containerContent = document.createElement("div");
    $containerContent.className = "w-full flex justify-end pt-5";
    const $titleCard = document.createElement("h2");
    $titleCard.textContent = "Master Card";
    $titleCard.className = "text-3xl text-gray-700 m-0";

    const $containerImg = document.createElement("div");
    const $containerImgCard = document.createElement("figure");
    const $imgCard = document.createElement("img");
    $imgCard.setAttribute("src", "../../public/img/chip.jpg");

    const $containerInfo = document.createElement("div");
    const $num = document.createElement("p") as unknown as HTMLParagraphElement;
    $num.textContent = "#### #### #### ####";
    $num.className = "text-purple-800 text-3xl w-max p-3";

    const $name = document.createElement("p");
    $name.className = "text-purple-800 text-2xl p-3";
    $name.textContent = "Name";

    const $containerForm = document.createElement("div");
    $containerForm.className = "bg-zinc-700 p-14 w-2/4 rounded-md";

    const $form = document.createElement("form");
    $form.className = "mt-8 space-y-6";

    const $titleName = document.createElement("label");
    $titleName.setAttribute("for", "name");
    $titleName.textContent = "Full Name";
    $titleName.className = "text-md";

    const $formName = document.createElement("input");
    $formName.setAttribute("type", "text");
    $formName.setAttribute("required", "");
    $formName.setAttribute("name", "name");
    $formName.className =
      "mb-8 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm";

    const $titleNumber = document.createElement("label");
    $titleNumber.setAttribute("for", "number");
    $titleNumber.textContent = "Number Card";
    $titleNumber.className = "text-md";

    const $forCardNUmber = document.createElement("input");
    $formName.setAttribute("type", "text");
    $formName.setAttribute("name", "number");
    $formName.setAttribute('autocomplete', 'off')
    $forCardNUmber.className =
      "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm";

    const $buttonProvider = document.createElement("input");
    $buttonProvider.setAttribute("type", "submit");
    $buttonProvider.setAttribute("value", "Verificar");
    $buttonProvider.className =
      "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

    $forCardNUmber.addEventListener('input', () => {
      const validator = new Validator();
      const maskify = validator.maskify($forCardNUmber.value);
      $num.textContent =  maskify;
      if($num.textContent === '') {
        $num.textContent = "#### #### #### ###";
      }
    })
    $formName.addEventListener('keyup', () => {
      $name.textContent = $formName.value;
    })
    $form.addEventListener("submit", (e): void => {
      e.preventDefault();
      const validator = new Validator();
      const isValid = validator.isValid($forCardNUmber.value);
      isValid ? alert("Numero de tarjeta valido") : alert("Numero de tarjeta invalido");
      $form.reset();
      $formName.focus();
    });
    $card.appendChild($containerContent);
    $containerContent.appendChild($titleCard);
    $card.appendChild($containerImg);
    $containerImg.appendChild($containerImgCard);
    $containerImgCard.appendChild($imgCard);
    $card.appendChild($containerInfo);
    $containerInfo.appendChild($num);
    $containerInfo.appendChild($name);
    $containerForm.appendChild($form);
    $form.appendChild($titleName);
    $form.appendChild($formName);
    $form.appendChild($titleNumber);
    $form.appendChild($forCardNUmber);
    $form.appendChild($buttonProvider);
    $container.appendChild($card);
    $container.appendChild($containerForm);
    $root.appendChild($container);

    return $container;
  }
}

export { UI };
