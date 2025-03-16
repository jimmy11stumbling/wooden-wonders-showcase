
import CustomRequestForm from "@/components/custom-request/CustomRequestForm";

const Custom = () => {
  return (
    <main className="min-h-screen py-24">
      <div className="custom-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
              Custom Request
            </span>
            <h1 className="text-4xl font-serif font-semibold mb-6">
              Design Your Perfect Piece
            </h1>
            <p className="text-muted-foreground">
              Tell us about your dream furniture piece and we'll bring it to life.
            </p>
          </div>
          <CustomRequestForm />
        </div>
      </div>
    </main>
  );
};

export default Custom;
