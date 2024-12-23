import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useId, useState } from "react";
// const query: { [key: string]: string[] } = {};
export default function CheckboxItem({
  value,
  attribute,
}: {
  value: {
    value: string;
    id: number;
  };
  attribute: string;
}) {
  const id = useId();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [attributes, setAttributes] = useState<{ [key: string]: string[] }>({});
  const handleChangeFilter = (
    status: boolean,
    attributeId: string,
    valueId: string
  ) => {
    const key = `attribute_${attributeId}`;
    const attributeClone = { ...attributes };

    if (!Array.isArray(attributeClone[key])) {
      attributeClone[key] = [];
    }
    if (status) {
      attributeClone[key].push(valueId);
    } else {
      attributeClone[key] = attributeClone[key].filter(
        (item) => item !== valueId
      );
    }
    setAttributes(attributeClone);
    const queryString = Object.keys(attributeClone)
      .map((key) => {
        const values = attributeClone[key]
          .map((item) => {
            if (key === "page") {
              return `page=1`;
            }
            return `${key}=${item}`;
          })
          .join("&");
        return values;
      })
      .join("&");
    router.push(`${pathname}?${queryString}`);
  };
  useEffect(() => {
    const attributes: { [key: string]: string[] } = {};
    [...searchParams.entries()].forEach((item) => {
      const key = item[0];
      const value = item[1];
      if (!Array.isArray(attributes[key])) {
        attributes[key] = [];
      }
      attributes[key].push(value);
    });
    setAttributes(attributes);
  }, [searchParams]);

  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex space-x-2 items-center ">
        {
          <Checkbox
            id={`attribute_${id}`}
            checked={attributes[`attribute_${attribute}`]?.includes?.(
              value.id.toString()
            )}
            onCheckedChange={(status: boolean) =>
              handleChangeFilter(status, attribute, value.id.toString())
            }
          />
        }
        <label
          htmlFor={`attribute_${id}`}
          className={cn(
            "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          )}
        >
          {value.value}
        </label>
      </div>
      [10]
    </div>
  );
}
