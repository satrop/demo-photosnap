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
    <div className="feature-table">
      <table>
        <thead>
          <tr>
            <th>THE FEATURES</th>
            {plans.map((plan) => (
              <th key={plan.name}>{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.title}>
              <td>{feature.title}</td>
              {plans.map((plan) => (
                <td key={`${plan.name}-${feature.title}`}>
                  <div>{plan.name}</div>
                  {plan.features[index] && (
                    <img
                      src="/pricing/desktop/check.svg"
                      alt="Feature included"
                      width={16}
                      height={12}
                    />
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
