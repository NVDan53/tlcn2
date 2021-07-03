import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  // destructure
  const { name, instructor, price, image, slug, paid, categories } = course;
  return (
    <Link href="/course/[slug]" as={`/course/${slug}`}>
      <a>
        <Card
          className="mb-4 bg-gray-50 rounded-3xl"
          cover={
            <img
              src={image.Location}
              alt={name}
              style={{ height: "200px", objectFit: "cover" }}
              className=""
            />
          }
        >
          <h2 className="text-left text-xl text-red font-semibold ">{name}</h2>
          <p className="text-left"> {instructor.name}</p>

        
          <h4 className="text-right text-xl text-yellow-400 font-semibold mt-1 ">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
