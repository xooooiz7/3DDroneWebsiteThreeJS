import FrameA from '../../assets/image/FrameA.png';
import FrameB from '../../assets/image/FrameB.png';
import BatteryA from '../../assets/image/BatteryA.png';
import FcA from '../../assets/image/FcA.png';
import LegA from '../../assets/image/LegA.png';
import LegB from '../../assets/image/LegB.png';
import MotorA from '../../assets/image/MotorA.png';
import WingsA from '../../assets/image/WingsA.png';

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
      imageProps: [LegA ,LegB],
      namesProp: ["Leg A","Leg B"], // ใช้สำหรับ set ค่าของ ชื่อ
      wingName : ["Leg A","Leg C"] , // ใช้สำหรับ set ค่าของ 3D Object
      pricesProp: [350, 400],
      colorsProp: ["#E9351D" ,"#4127DC" ,"#000000" , "#B85C1A" , "#F1FF52" , "#34C38F" ,"#F5F5F5" ,"#858585" , "#E252C3" , "#4CA9DE"]
    },
    {
      numOfBoxes: 1,
      imageProps: [FcA],
      namesProp: ["FC A"],
      FCName : ["FC A"] , 
      pricesProp: [350],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 1,
      imageProps: [MotorA],
      namesProp: ["Motors A"],
      MotorsName : ["Motors A"] , 
      pricesProp: [350],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 1,
      imageProps: [WingsA],
      namesProp: ["Wings A"],
      WingName : ["Wings A"] , 
      pricesProp: [350],
      colorsProp: ["#683434" ,"#1a5e1a" ,"#659994" , "#896599" , "#59555b" ]
      
    },
    {
      numOfBoxes: 1,
      imageProps: [BatteryA],
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
