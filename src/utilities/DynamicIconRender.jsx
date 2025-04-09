import { useEffect, useState } from "react";

export default function DynamicIconRender({ productIcon }) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (productIcon) {
      import(`@heroicons/react/24/solid`)
        .then((module) => {
          const ImportedIcon = module[productIcon];
          if (ImportedIcon) setIconComponent(() => ImportedIcon);
        })
        .catch((err) => {
          console.error("Icon not found:", err);
        });
    }
  }, [productIcon]);

  return IconComponent;
}
