import Image from "next/image";
import "./FeatureTable.scss";

interface FeatureTableProps {
  features: { title: string }[];
  plans: {
    name: string;
    features: boolean[];
  }[];
}

export default function FeatureTable({ features, plans }: FeatureTableProps) {
  return (
    <div
      className="feature-table"
      role="region"
      aria-label="Feature comparison"
    >
      <table>
        <caption className="visually-hidden">Compare features across different plans</caption>
        <thead>
          <tr>
            <th scope="col">THE FEATURES</th>
            {plans.map((plan) => (
              <th
                scope="col"
                key={plan.name}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.title}>
              <th scope="row">{feature.title}</th>
              {plans.map((plan) => (
                <td key={`${plan.name}-${feature.title}`}>
                  <div>{plan.name}</div>
                  {plan.features[index] ? (
                    <Image
                      src="/pricing/desktop/check.svg"
                      alt={`${feature.title} is included in ${plan.name} plan`}
                      width={16}
                      height={12}
                    />
                  ) : (
                    <span className="visually-hidden">Not included in {plan.name} plan</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
