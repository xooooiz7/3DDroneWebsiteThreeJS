
const cardTitles = ["Frame", "Legs", "FC","Wings"];
const dataset_model = [
    {
      numOfBoxes: 2,
      imageProps: [
      "https://images.unsplash.com/photo-1602526214925-4fedda6a53df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553165558-424ffa9c4303?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      namesProp: ["Frame A","Frame B","Frame C", "d"],
      FrameName : ["Frame A","Frame B","Frame C", "d"] , 
      pricesProp: [300,350, 100, 4],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
    },
    {
      numOfBoxes: 3,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1690885744537-1ff88d3ff9ad?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1708169967312-889c71da622b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],      namesProp: ["Leg A","Leg B","Leg C"],
      wingName : ["Leg A","Leg B","Leg C"] , 
      pricesProp: [3, 4],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]

      
    },
    {
      numOfBoxes: 3,
      imageProps: ["BatteryA","BatteryB", "BatteryC"],
      namesProp: ["b","c", "d"],
      pricesProp: [2, 3, 4],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]

      
    },
    {
      numOfBoxes: 7,
      imageProps: ["LegsA","LegsB", "LegsC", "LegsD", "LegsE", "LegsF", "LegsG"],
      namesProp: ["a","b","c", "d","f","g","e"],
      pricesProp: [1,2, 3, 4,2, 3, 4],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
];



const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#896599",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];




export { dataset_model, cardTitles , chairColors };
