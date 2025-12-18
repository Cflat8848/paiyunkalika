import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Chakra Pani Bhusal",
    role: "Marketing & Sales Head",
    image: "/lovable-uploads/chakra-pani-bhusal.jpeg",
    description: "Leading our marketing and sales initiatives with extensive experience in the textile industry."
  },
  {
    name: "Sandip Bhusal",
    role: "International Purchase & Operations Manager",
    image: "/lovable-uploads/sandip-bhusal.jpeg",
    description: "Managing international procurement and overseeing operations to ensure seamless business flow."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-fabric-600 to-fabric-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Team</h1>
            <p className="text-lg text-fabric-100 max-w-2xl mx-auto">
              Meet the dedicated professionals driving Paiyun Kalika's success in the textile industry.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-fabric-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-serif font-bold text-fabric-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-fabric-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-textile-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
