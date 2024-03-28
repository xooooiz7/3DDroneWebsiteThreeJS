import FrameA from '../../assets/image/FrameA.png';
import FrameB from '../../assets/image/FrameB.png';

const cardTitles = ["Frame", "Legs", "FC","Motors",'Wings','Battery','Camera','Cam Control','GPS','Sensor'];
const dataset_model = [
    {
      numOfBoxes: 2,
      imageProps: [
        FrameA,
        FrameB
      ],
      namesProp: ["Frame A","Frame B","Frame C", "d"],
      FrameName : ["Frame A","Frame B","Frame C", "d"] , 
      pricesProp: [300,350, 100, 400],
      colorsProp: ["#E9351D" ,"#4127DC" ,"#000000" , "#B85C1A" , "#F1FF52" , "#34C38F" ,"#F5F5F5" ,"#858585" , "#E252C3" , "#4CA9DE"]
    },
    {
      numOfBoxes: 2,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1690885744537-1ff88d3ff9ad?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1708169967312-889c71da622b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],     
      namesProp: ["Leg A","Leg B"], // ใช้สำหรับ set ค่าของ ชื่อ
      wingName : ["Leg A","Leg C"] , // ใช้สำหรับ set ค่าของ 3D Object
      pricesProp: [350, 400],
      colorsProp: ["#E9351D" ,"#4127DC" ,"#000000" , "#B85C1A" , "#F1FF52" , "#34C38F" ,"#F5F5F5" ,"#858585" , "#E252C3" , "#4CA9DE"]
    },
    {
      numOfBoxes: 3,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1690885744537-1ff88d3ff9ad?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1708169967312-889c71da622b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],     
      namesProp: ["FC A","FC B","FC C"],
      FCName : ["FC A","FC B","FC C"] , 
      pricesProp: [350, 450 , 400],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 3,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1690885744537-1ff88d3ff9ad?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1708169967312-889c71da622b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],     
      namesProp: ["Motors A"],
      MotorsName : ["Motors A"] , 
      pricesProp: [350, 450 , 400],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 1,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],     
      namesProp: ["Wings A"],
      WingName : ["Wings A"] , 
      pricesProp: [350],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 1,
      imageProps: [
        "https://images.unsplash.com/photo-1699959634881-16f34059a78f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],     
      namesProp: ["Battery A"],
      BatteryName : ["Battery A"] , 
      pricesProp: [350],
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
