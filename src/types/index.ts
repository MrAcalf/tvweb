export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  features: string[];
  popular?: boolean;
  color: string;
  hoverColor: string;
}