/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FullWidthDecorator(Story: any) {
  return (
    <div className="min-w-96">
      <Story />
    </div>
  );
}
