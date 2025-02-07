import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["All Basic features", "Feature 4", "Feature 5", "Feature 6"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Pro features", "Feature 7", "Feature 8", "Feature 9"],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
