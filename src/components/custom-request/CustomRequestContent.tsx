
import CustomOptions from './CustomOptions';
import ProcessSteps from './ProcessSteps';

type CustomRequestContentProps = {
  isVisible: boolean;
  customOptions: Array<{
    category: string;
    options: string[];
  }>;
};

const CustomRequestContent = ({ isVisible, customOptions }: CustomRequestContentProps) => {
  return (
    <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
        Custom Design
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
        Bring Your Vision to Life
      </h2>
      <p className="text-muted-foreground mb-8">
        Our custom furniture service allows you to create pieces that perfectly fit your space, style, and needs. From initial concept to final delivery, we work closely with you at every step.
      </p>
      
      {/* Custom options */}
      <CustomOptions options={customOptions} />
      
      {/* Process steps */}
      <div className="mt-12">
        <ProcessSteps />
      </div>
    </div>
  );
};

export default CustomRequestContent;
