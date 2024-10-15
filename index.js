const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  const display = () => {};
  
  const randomizeFreelancers = () => {
    //number of items to be pulled.
    const numberOfItemsPulled =
      Math.floor(Math.random() * freelancers.length) + 1;
    let randomFreelancers = [];
    for (let i = 0; i < numberOfItemsPulled; i++) {
      randomFreelancers.push(
        freelancers[Math.floor(Math.random() * freelancers.length)]
      );
    }
    return randomFreelancers;
  };
  
  const init = () => {
    const body = document.querySelector("body");
    body.style.display = "block";
  
    const heading = document.createElement("div");
    heading.style.display = "block";
  
    const title = document.createElement("h1");
    title.innerHTML = "Freelancer Forum";
  
    const averageStartingPrice = document.createElement("h2");
    //This will be appended with a variable later
    //I don't want to run the whole loop process more than needed.
  
    const chartTitle = document.createElement("h1");
    chartTitle.innerText = "Available Freelancers";
  
    /*Break for my own eyes categorizing */
    const article = document.createElement("article");
    article.style.display = "flex";
    article.style.flexWrap = "wrap";
  
    const nameSection = document.createElement("section");
    nameSection.append(document.createElement("h3"));
    nameSection.innerText = "Name";
    nameSection.style.paddingRight = "15px";
  
    const priceSection = document.createElement("section");
    priceSection.append(document.createElement("h3"));
    priceSection.innerText = "Starting Price";
    priceSection.style.paddingRight = "15px";
  
    const occupationSection = document.createElement("section");
    occupationSection.append(document.createElement("h3"));
    occupationSection.innerText = "Occupation";
  
    let startingPrices = []; //declare to assign values through loop
  
    randomizeFreelancers().forEach((element) => {
      const nameDiv = document.createElement("div");
      const occupationDiv = document.createElement("div");
      const priceDiv = document.createElement("div");
      startingPrices.push(element.price);
      nameDiv.innerText = element.name;
      occupationDiv.innerText = element.occupation;
      priceDiv.innerText = element.price;
      nameSection.append(nameDiv);
      occupationSection.append(occupationDiv);
      priceSection.append(priceDiv);
    });
  
    averageStartingPrice.innerText = `The average starting price is  ${
      startingPrices.reduce((acc, price) => acc + price, 0) /
      startingPrices.length
    }`;
  
    //Make Appends Section
    article.append(nameSection);
    article.append(priceSection);
    article.append(occupationSection);
  
    body.append(averageStartingPrice);
    heading.append(title);
    heading.append(averageStartingPrice);
    heading.append(chartTitle);
  
    body.append(heading);
    body.append(article);
  };
  
  init();
  