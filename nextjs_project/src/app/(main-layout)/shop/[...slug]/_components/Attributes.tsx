import { cloneDeep } from "@/app/utils/utils";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
const activeClass = "border-primaryColor text-primaryColor";
type Attribute = {
  id: number;
  name: string;
  values: { id: number; value: string; isActive: boolean }[];
};
let isClickAttribute = false;
export default function Attributes({
  attributes,
  onChange,
  onChooseValueId,
}: {
  attributes: { [key: string]: unknown }[];
  onChange: (data: { [key: string]: unknown }) => void;
  onChooseValueId: (data: number[]) => void;
}) {
  const [attributeList, setAttributeList] = useState<Attribute[]>(
    [] as Attribute[]
  );
  const handleClickAttributeValue = (valueId: number, attributeId: number) => {
    isClickAttribute = true;
    setAttributeList(
      cloneDeep(attributeList).map((attribute) => {
        const values = attribute.values.map((value) => {
          if (attribute.id === attributeId) {
            if (value.id === valueId) {
              value.isActive = true;
            } else {
              value.isActive = false;
            }
          }
          return value;
        });
        return { ...attribute, values };
      })
    );
  };
  useEffect(() => {
    const chooseValueId: number[] = [];
    setAttributeList(
      cloneDeep(attributes as Attribute[]).map((attribute) => {
        const values = attribute.values;
        values[0].isActive = true;
        chooseValueId.push(values[0].id);
        return attribute;
      })
    );
    onChooseValueId(chooseValueId);
  }, []);

  useEffect(() => {
    if (!isClickAttribute) return;
    const chooseValueId: number[] = [];
    attributeList.forEach((attribute) => {
      const values = attribute.values;
      values.forEach((value) => {
        if (value.isActive) {
          chooseValueId.push(value.id);
        }
      });
    });

    onChooseValueId(chooseValueId);

    //Call API --> SET PRODUCT
    const productFromApi = {
      id: 5,
      name: "Sản phẩm 5",
      slug: "san-pham-5",
      price: "2.000đ / kg",
      category: {
        name: "Chuyên mục 4",
        slug: "chuyen-muc-4",
      },
      star: 4,
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi est ab cumque? Sint, debitis doloribus ipsum voluptate dolores odit illo sapiente dignissimos provident quae repellendus, porro odio? Fugit, quam necessitatibus new",
      description:
        "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi est ab cumque? Sint, debitis doloribus ipsum voluptate dolores odit illo sapiente dignissimos provident quae repellendus, porro odio? Fugit, quam necessitatibus. new</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi est ab cumque? Sint, debitis doloribus ipsum voluptate dolores odit illo sapiente dignissimos provident quae repellendus, porro odio? Fugit, quam necessitatibus.</p>",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoL4crQRS-mKgKxmSxMoob02PmlPPhbhKrw&s",
    };
    onChange(productFromApi);
  }, [attributeList]);

  return (
    <div className="mb-3">
      {attributeList.map((attribute) => {
        return (
          <div className="flex mb-3" key={attribute.id as number}>
            <div className="w-[20%]">Màu sắc</div>
            <div className="w-[80%]">
              <div className="flex gap-2 flex-wrap">
                {(
                  attribute as {
                    values: { id: number; value: string; isActive: boolean }[];
                  }
                ).values.map((value) => {
                  return (
                    <span
                      key={value.id}
                      className={cn(
                        "border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor",
                        value.isActive && activeClass
                      )}
                      onClick={() =>
                        handleClickAttributeValue(value.id, attribute.id)
                      }
                    >
                      {value.value}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
