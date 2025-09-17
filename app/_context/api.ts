export interface doc{ 
    id:string;
    name:string;
    description:string;
    image:string;
    date:string;
    time:string;
     popular:string;
    category:string;
}
export type doctor={
    doctors:{
    id:string,
    name:string,
    description:string,
    image:string,
    date:string,
    time:string,
    popular:string,
    category:string,
}[];
appointments:{
  
  selected:doc,
  date:string,
  hour:string, 
  }[]
}
// Define the initial state using that type
export const initialState:doctor ={ 
    doctors:[{
        id:"1",
        name:"Dr.Johnny – Dermatologist & Skin Care Specialist",
        description:"Dr.Johnny is a skilled and compassionate dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With extensive experience in both medical and cosmetic dermatology, Dr.Johnny is dedicated to providing personalized care using the latest technologies and evidence-based treatments.",
        image:"/Appointments-doctors-app/assets/images/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"skin",
    },
  
{
        id:"2",
        name:"Dr.Mark – Hematologist & Blood Disorders Specialist",
        description:"Dr.Mark is a dedicated hematologist specializing in the diagnosis and management of both benign and malignant blood disorders. With a patient-centered approach and up-to-date medical expertise, Dr.mark provides comprehensive care tailored to each individual's condition.",
        image:"/Appointments-doctors-app/assets/images/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"blood",
      },
{
        id:"3",
        name:"Dr.Jack – Pulmonologist & Respiratory Medicine Specialist",
        description:"Dr.Jack is a highly qualified pulmonologist specializing in the diagnosis and treatment of acute and chronic respiratory conditions. With a commitment to thorough care, Dr.Jack combines advanced diagnostic tools and evidence-based therapies to help patients breathe easier and live better",
        image:"/Appointments-doctors-app/assets/images/adding-another-great-doctor-their-already-great-team_709984-2642.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"lungs",
    },
{
        id:"4",
        name:"Dr.Margaret – Ophthalmologist & Eye Surgery Specialist",
        description:"Dr.Margaretis a highly experienced ophthalmologist dedicated to diagnosing and treating a wide range of eye conditions using the latest medical and surgical technologies. Committed to protecting vision and enhancing eye health, Dr.Margaret offers personalized care for patients of all ages.",
        image:"/Appointments-doctors-app/assets/images/istockphoto-638647058-612x612.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"eyes",
    },
{
        id:"5",
        name:"Dr.madona – Dermatologist & Skin Care Specialist",
        description:"Dr.madona is a highly experienced ophthalmologist dedicated to diagnosing and treating a wide range of eye conditions using the latest medical and surgical technologies. Committed to protecting vision and enhancing eye health, Dr.madona offers personalized care for patients of all ages.",
        image:"/Appointments-doctors-app/assets/images/istockphoto-1189304032-612x612.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"stomach",
    },
{
        id:"6",
        name:"Dr.Diana – Dermatologist & Skin Care Specialist",
        description:"Dr.Diana is a skilled and compassionate dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With extensive experience in both medical and cosmetic dermatology, Dr.Diana is dedicated to providing personalized care using the latest technologies and evidence-based treatments.",
        image:"/Appointments-doctors-app/assets/images/istockphoto-1198236728-612x612.jpg",
        date:"Saturday-Thursday",
        time:"10am-5pm",
        popular:"popular",
        category:"brain",
    }],
    appointments: []
}