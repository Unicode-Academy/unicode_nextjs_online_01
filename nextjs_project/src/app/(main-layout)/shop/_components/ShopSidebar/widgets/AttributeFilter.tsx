import attributeData from "@/app/data/attribute_filter.json";
import { Fragment, useEffect, useState } from "react";
import CheckboxItem from "./CheckboxItem";
import { Minus, Plus } from "lucide-react";
type Attribute = {
  id: number;
  name: string;
  values: {
    id: number;
    value: string;
  }[];
};
export default function AttributeFilter() {
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [attributeValueStatus, setAttributeValueStatus] = useState([]);

  const handleToggleValue = (attributeId: number) => {
    const attributeStatusClone = JSON.parse(
      JSON.stringify(attributeValueStatus)
    );
    const result = attributeStatusClone.find((item) => item.id === attributeId);
    result.status = !result.status;
    setAttributeValueStatus(attributeStatusClone);
  };

  useEffect(() => {
    setAttributes(attributeData);
    setAttributeValueStatus(
      attributeData.map((attribute) => {
        return { id: attribute.id, status: true };
      })
    );
  }, []);

  return (
    <div className="mb-5">
      {attributes.map((attribute: Attribute) => {
        const isShow = attributeValueStatus.find(
          (item) => item.id === attribute.id && item.status
        );

        return (
          <Fragment key={attribute.id}>
            <h3 className="text-[2.4rem] font-[600] flex justify-between items-center">
              {attribute.name}{" "}
              <span
                className="block"
                onClick={() => handleToggleValue(attribute.id)}
              >
                {isShow ? (
                  <Minus size={16} className="cursor-pointer" />
                ) : (
                  <Plus size={16} className="cursor-pointer" />
                )}
              </span>
            </h3>
            <div className="mt-5 mb-5">
              {isShow &&
                attribute.values.map((item) => (
                  <CheckboxItem
                    value={item}
                    key={item.id}
                    attribute={attribute.id}
                  />
                ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

/*
status: [
{
    id: 1,
    status: true
},
{
    id: 2,
    status: false
}
]
*/
