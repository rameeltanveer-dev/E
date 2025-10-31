const productsData = [
    { name: "Samsung Washing", img: "/assets/images/washsum1.jpeg", price: "$345.60", description: "WA15CK5745BDRT with Ecobubble™, 15 Kg Washing Machine" },
    { name: "LG Washing", img: "/assets/images/washlg1.jpeg", price: "$479.00", description: "LG FH2J3TDNPO 8.0 Kg Front Load Fully Automatic Washing Machine" },
    { name: "Haier Washing", img: "/assets/images/washha1.webp", price: "$325.00", description: "HAIER 8KG AUTOMATIC TOP LOAD WASHING MACHINE Model HWM80-1269X" },
    { name: "Samsung Washing", img: "/assets/images/washsum4.webp", price: "$300.00", description: "SAMSUNG 21KG AUTOMATIC TOP LOAD WASHING MACHINE Model WA21CK6745BVRT" },
    { name: "Dawnlance Washing", img: "/assets/images/washdal1.webp", price: "$275.00", description: "DAWLANCE 13KG TWIN TUB WASHING MACHINE Model DW-10600" },
    { name: "Haier Washing", img: "/assets/images/washha2.webp", price: "$290.67", description: "HAIER 15KG AUTOMATIC TOP LOAD WASHING MACHINE Model HWM 150-1708" },
    { name: "LG Washing", img: "/assets/images/washlg3.webp", price: "$175.90", description: "LG 8KG AUTOMATIC FRONT LOAD WASHING MACHINE Model F4R3TYG6P" },
    { name: "Dawnlance Washing", img: "/assets/images/washdal2.webp", price: "$400.00", description: "DAWLANCE 9KG AUTOMATIC TOP LOAD WASHING MACHINE Model DWT 9060 EZ Auto Machine" },
    { name: "Samsung Washing", img: "/assets/images/washsum3.webp", price: "$415.50", description: "SAMSUNG 11/7KG AUTOMATIC FRONT LOAD WASHER AND DRYER WITH ECOBUBBLE Model WD11TP34DSX" },
    { name: "Haier Refrigerator", img: "/assets/images/ref.png", price: "$950.50", description: "Haier French Door Smart Refrigerator Black Glass" },
    { name: "Samsung Refrigerator", img: "/assets/images/ref5sum.jpeg", price: "$1200.50", description: "Samsung Refrigerator RS62R5001M9 Side by Side" },
    { name: "LG Refrigerator", img: "/assets/images/ref6lg.jpeg", price: "$1000.00", description: "LG GR-X29FTQKL Refrigerator French Door InstaView" },
    { name: "Dawlance Refrigerator", img: "/assets/images/ref8dal.jpeg", price: "$600.99", description: "Dawlance Refrigerator 91999 Avante Diamond Purple Color (GD)" },
    { name: "Haier Refrigerator", img: "/assets/images/ref3.jpg", price: "$525.00", description: "Haier Glass Door Refrigerator HRF-368EPR/EPB/EPC Black Refrigerator" },
    { name: "Gree Refrigerator", img: "/assets/images/refgree.jpeg", price: "$850.00", description: "Gree Refrigerator E8890GR-CR1 Flower Red Refrigerator" },
    { name: "Haier Refrigerator", img: "/assets/images/ref2.webp", price: "$775.90", description: "Haier HRF-438 IDBA (Black) Refrigerator, Digital Control" },
    { name: "Gree Refrigerator", img: "/assets/images/refgre.jpeg", price: "$850.00", description: "Gree E9978G-CB1 Refrigerator Gray Color" },
    { name: "Dawlance Refrigerator", img: "/assets/images/ref9dal.jpeg", price: "$99.00", description: "Dawlance 6 CFT Top Mount Refrigerator 9140LF E-Chrome" },
    { name: "LG AC", img: "/assets/images/ac9.jpg", price: "$345.60", description: "1.5 Ton Air Conditioners" },
    { name: "Samsung AC", img: "/assets/images/acsum.jpg", price: "$499.00", description: "2 Ton Hybrid Inverter AC" },
    { name: "Haier AC", img: "/assets/images/acha.jpeg", price: "$225.00", description: "1 Ton Inverter AC" },
    { name: "Dawlance AC", img: "/assets/images/ac10.png", price: "$399.99", description: "1.5 Ton Air Conditioners" },
    { name: "Dawlance AC", img: "/assets/images/Acdal.png", price: "$420.00", description: "2 Ton Hybrid Inverter AC" },
    { name: "Gree AC", img: "/assets/images/ac8.jpg", price: "$350.67", description: "1.5 Ton Inverter AC" },
    { name: "LG AC", img: "/assets/images/ac12.jpg", price: "$275.90", description: "2 Ton Air Conditioners" },
    { name: "Gree AC", img: "/assets/images/ac7.jpg", price: "$200.00", description: "2 Ton Hybrid Inverter AC" },
    { name: "Haier AC", img: "/assets/images/ac2.jpg", price: "$425.50", description: "1.5 Ton Inverter AC" },
    { name: "LG LCD", img: "/assets/images/lcdlg2.jpeg", price: "$250.60", description: "LG 42LB550" },
    { name: "Samsung LCD", img: "/assets/images/lcd1.jpg", price: "$400.00", description: "Samsung 22 Inches Gaming LCD" },
    { name: "Haier LCD", img: "/assets/images/lcdha1.jpeg", price: "$225.00", description: "Haier 42 Inch LED Full HD TV (LE42B9000)" },
    { name: "Dawlance LCD", img: "/assets/images/lcddaw1.webp", price: "$450.00", description: "Dawlance 43E22 43 inch Blaze" },
    { name: "Dawlance LCD", img: "/assets/images/lcddaw2.jpeg", price: "$390.00", description: "Dawlance 43E22 43 inch Blaze" },
    { name: "Haier LCD", img: "/assets/images/lcdha2.jpeg", price: "$305.67", description: "Haier 32 inch LED TV – H32D2M" },
    { name: "LG LCD", img: "/assets/images/lcd9.webp", price: "$175.90", description: "Full HD 1080p LED TV-42\"" },
    { name: "Samsung LCD", img: "/assets/images/lcdsum1.jpeg", price: "$200.00", description: "42 Inch Samsung LCD TV" },
    { name: "Samsung LCD", img: "/assets/images/lcdsum2.jpg", price: "$245.50", description: "42 Inch Samsung LCD TV" }
    ,
    { name: "Haier Oven", img: "/assets/images/ovenha1.jpeg", price: "$205.50", description: "Haier Microwave Oven HMN-32100 EGB" },
    { name: "Samsung Oven", img: "/assets/images/ovensum1.jpeg", price: "$320.50", description: "Samsung Microwave Oven MS20A3010AL Full Glass Door" },
    { name: "LG Oven", img: "/assets/images/ovenlg2.jpeg", price: "$400.00", description: "LG Microwave Oven MH8265DIS – 42 Litre – Smart Inverter" },
    { name: "Dawlance Oven", img: "/assets/images/ovendal1.jpeg", price: "$399.99", description: "Dawlance Microwave Oven 30Ltr – Model DW 133G Grilling Microwave" },
    { name: "Haier Oven", img: "/assets/images/ovenha2.jpeg", price: "$295.00", description: "Haier HGL-20MXP7 Inverter (0294) Microwave Oven White Color" },
    { name: "Samsung Oven", img: "/assets/images/ovensum2.jpg", price: "$485.00", description: "Samsung Microwave Oven ME6194ST 56 LTR Black Color Oven" },
    { name: "Samsung Oven", img: "/assets/images/ovensum3.jpeg", price: "$575.90", description: "Samsung Microwave Oven MG40J5133AT/SG 40Ltr" },
    { name: "Gree Oven", img: "/assets/images/ovengree1.jpeg", price: "$350.00", description: "Gree MS-2544 B MICROWAVE OVEN 25 LITRES" },
    { name: "Dawlance Oven", img: "/assets/images/ovendal2.jpeg", price: "$215.50", description: "DAWLANCE MICROWAVE OVEN GRILL Model DW-131-HP" }
];

const product1Select = document.getElementById("product1");
const product2Select = document.getElementById("product2");

productsData.forEach(product => {
    let option1 = document.createElement("option");
    option1.value = product.name;
    option1.textContent = product.name;
    product1Select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = product.name;
    option2.textContent = product.name;
    product2Select.appendChild(option2);
});

function compareProducts() {
    let product1Name = product1Select.value;
    let product2Name = product2Select.value;
    let comparisonDiv = document.getElementById("comparisonResult");

    if (!product1Name || !product2Name || product1Name === product2Name) {
        comparisonDiv.innerHTML = '<p class="text-danger">Please select two different products to compare.</p>';
        return;
    }

    let product1 = productsData.find(p => p.name === product1Name);
    let product2 = productsData.find(p => p.name === product2Name);

    comparisonDiv.innerHTML = `
        <div class="col-md-6">
            <div class="card mb-5">
                <img src="${product1.img}" class="card-img-top" alt="${product1.name}">
                <div class="card-body">
                    <h5 class="card-title">${product1.name}</h5>
                    <p>${product1.description}</p>
                    <p><strong>Price:</strong> ${product1.price}</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <img src="${product2.img}" class="card-img-top" alt="${product2.name}">
                <div class="card-body">
                    <h5 class="card-title">${product2.name}</h5>
                    <p>${product2.description}</p>
                    <p><strong>Price:</strong> ${product2.price}</p>
                </div>
            </div>
        </div>
    `;
}