import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useEffect, useState } from "react";
import axios from "axios";


const PropertyDetailPage: React.FC = () => {
  const router = useRouter();
   const { id } = router.query;
   const [property, setProperty] = useState<PropertyProps | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProperty = async () => {
         if (!id) return;
         try {
            const response = await axios.get(`/api/properties/${id}`);
            setProperty(response.data);
         } catch (error) {
            console.error("Error fetching property details:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchProperty();
   }, [id]);

   if (loading) {
      return <p>Loading...</p>;
   }

   if (!property) {
      return <p>Property not found</p>;
   }
  
  if (!property) {
    return <div className="min-h-screen flex items-center justify-center">Property not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details and Reviews */}
          <div className="lg:col-span-2">
            {/* Property Details */}
            <PropertyDetail property={property} />
            
            {/* Reviews Section */}
            <ReviewSection propertyId={property.id} />
          </div>

          {/* Right Column - Booking Section (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingSection price={property?.price} />
            </div>
          </div>
        </div>

        {/* Back to Listings Button */}
        <div className="mt-8">
          <button 
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
