let cartItemsCount = 0;

fetch("http://localhost:1337/api/items")
  .then((response) => response.json())
  .then(({ data }) => {
    const [container] = document.getElementsByClassName("container2");

    data.forEach(({ attributes: { name, price, imageUrl } }) => {
      const block = document.createElement("div");
      const img = document.createElement("img");
      const input = document.createElement("input");
      const p = document.createElement("p");

      block.className = "block2";

      img.className = "img";
      img.src = imageUrl;
      img.width = 370;
      img.height = 150;

      input.className = "button";
      input.type = "button";
      input.value = price;
      input.addEventListener("click", () => {
        const cartEl = document.querySelectorAll("a.head_menu")[1];

        cartEl.textContent = `Shopping cart (${++cartItemsCount})`;
      });

      p.className = "name";
      p.textContent = name;

      block.append(img, input, p);
      container.append(block);
    });
  });

fetch("http://localhost:1337/api/restaurants")
  .then((response) => response.json())
  .then(({ data }) => {
    const [containerRestaurans] = document.getElementsByClassName("container1");

    data.forEach(({ attributes: { name } }) => {
      const blockNameRestaurans = document.createElement("div");

      blockNameRestaurans.className = "block1";
      blockNameRestaurans.textContent = name;
      containerRestaurans.append(blockNameRestaurans);
    });
  });
