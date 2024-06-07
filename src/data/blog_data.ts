
import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg"; 
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}


const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `How a Creative Agency Can Help?`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Maximizing Your Marketing Budget`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 4,
    img: blog_img_1,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 5,
    img: blog_img_2,
    title: `How a Creative Agency Can Help?`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 6,
    img: blog_img_3,
    title: `Maximizing Your Marketing Budget`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
]

export default blog_data