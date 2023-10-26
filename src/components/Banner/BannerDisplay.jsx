// rafce arrow
import PropTypes from 'prop-types';
import { useSelectedItem } from "../../hooks/useSelectedItem";
import { ImageBanner } from "./Banner";
import { TextBanner } from "./Banner";
import { bannerList } from "../../data/bannerList";


export const BannerDisplay = ({id, type}) => {
   // call the useSelecteItem hook to get the selected banner
   const selectedBanner = useSelectedItem(id, bannerList.listArray);

   if (!selectedBanner) {
     return null; // return null if banner is not found
   }


   return (
     <div>
       {/* check the type property for display */}
       {type === 'image' && (
         <ImageBanner
           imageUrl={selectedBanner.imageUrl}
           alt={selectedBanner.alt}
           title={selectedBanner.title}
           topLeftTagline={selectedBanner.topLeftTagline}
           buttons={selectedBanner.buttons}
          
         />
       )}
       {type === 'text' && (
         <TextBanner
           title={selectedBanner.title}
           paragraphs={selectedBanner.paragraphs}
         />
       )}
     </div>
   );
};

BannerDisplay.propTypes = {
    id: PropTypes.number.isRequired, // prop specifying the selected banner ID
    type: PropTypes.oneOf(['text', 'image']).isRequired, // prop specifying the banner type
};


