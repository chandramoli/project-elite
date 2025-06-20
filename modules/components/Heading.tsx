const Heading = ({size,children,className}:{size:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',className?:string,children: React.ReactNode}) => {
const sizes = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-normal',
  h5: 'text-lg font-light',
  h6: 'text-base font-thin',
};
    return (
       <div className={`${sizes[size] || sizes.h1} ${className}`}>
{children}
       </div>
  );
}


export default Heading;