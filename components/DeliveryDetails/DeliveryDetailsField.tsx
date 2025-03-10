type Props = {
  title: string;
  children: React.ReactNode;
};

export const DeliveryDetailsField = ({ title, children }: Props) => {
  return (
    <p>
      <strong>{title}</strong> {children}
    </p>
  );
};
