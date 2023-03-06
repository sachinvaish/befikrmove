import React from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from './DetailItem';

export default function Detail() {

    const {name}= useParams();
    
    const branches = [
        {
            city: 'Delhi',
            description: 'Befikrmove is one of the trusted Packers and Movers in Delhi. We are pioneers in the packing and moving industry, we offer a wide selection of high-caliber services that are sure to leave a lasting impression on our clients. Our Corporate Office is also located in Delhi, we would like to ensure that we provide affordable packers and movers services in Delhi',
            phone: 7764046100,
            address: 'Corporate Office	158/1/2, Gali No 11 Samta vihar Mukundpur Part 2 New Delhi 110042',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4964263119555!2d77.18829171508487!3d28.7345917823777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01e0980be4f7%3A0xfbc395dde0bc5fd2!2sGalli%20Number%2011%2C%20Fuji%20Colony%2C%20Fauji%20Colony%2C%20Mukandpur%20Part%202%2C%20Mukundpur%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1678122585804!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Patna',
            description: 'Are you looking for qualified Packers & Movers in Patna, Bihar? Befikrmove is best for hiring expert movers and packers. Avail the services of one of the top movers and packers in Patna with us at reasonable prices. Apart from being affordable, our co-workers are qualified, skilled, experienced, and registered as well.',
            phone: 7979767957,
            address: 'Ghana Colony Road Ramakrishna nagar Kankarbagh 2 PATNA BIHAR 800020 ',
            email: 'patna@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.725197556736!2d85.14199961449225!3d25.580807822308543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a780c946e483%3A0x26d6e7cad508dce2!2sGhana%20Colony%20Rd%2C%20East%20Ram%20Krishna%20Nagar%2C%20Ramkrishan%20Nagar%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1678122797422!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Agra',
            description: 'With local associates and operations across India, Befikrmove is the fastest-growing company in the Top Movers & Packers industry in Agra. Packers and movers in Agra provide services from picking up the package at your doorstep to delivering it to the required locations along with handling any related difficulties like sales, taxes, and insurance.',
            phone: 8126657772,
            address: 'BefikrmoveShop 457/6, Tp Nagar, Agra, Uttar Pradesh 282002',
            email: 'agra@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.311377566259!2d77.97050131505128!3d27.209372083000744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477826b0c7669%3A0xb002749898fbfd03!2sShop%20457%2C%206%2C%20Transport%20Colony%2C%20Transport%20Nagar%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1678122864572!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Allahabad',
            description: 'Befikrmove Packers and Movers in Allahabad is the ideal place to meet your relocation demands. We are the most trusted Packers and Movers in Allahabad, working to meet the needs of the clients for packing and moving in a simple yet creative approach. have been.',
            phone: 7764046100,
            address: '951 kalyanidavi opp kalyanidavi temple, Allahabad',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2042238721347!2d81.83173111501418!3d25.431434983787817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985353272439eab%3A0x7d8a694d286a4748!2sKalyani%20Devi%20Shaktipeeth%20Mandir!5e0!3m2!1sen!2sin!4v1678122937133!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Aurangabad',
            description: 'Nowadays, managing the packing and moving process can be quite a challenge. Your packing needs and wishes are in good hands with Packers And Movers OfAurangabad. You should hire Befikrmove packers and movers in Aurangabad if you want to relocate without any worries.',
            phone: 7764046100,
            address: 'Dharmatma Complax, Avishkar Chowk N-5 Cidco Opp. Swami Smarth Tea House, Aurangabad -431003',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.925911930612!2d75.34708745409431!3d19.883004000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba295aff041c5%3A0xbe4d4bdcbcf5e17e!2sProperty%20Agents!5e0!3m2!1sen!2sin!4v1678123079636!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Bangalore',
            description: 'Are you looking for top packers and movers in Bangalore? Befikrmove is your one-stop shop for packing and moving services. You can find a list of top-verified movers in Bangalore who are qualified to handle any of your packers and moving needs.',
            phone: 9886526564,
            address: '#41, Jai Bharat Parking TCI Bus stop 18km Tumkur Road, Madavara Bangaluru Karnatka 562162',
            email: 'bangalore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.629626492265!2d77.46322031430515!3d13.05923121648396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae24a924e8f1d9%3A0x255b97680f7d721c!2sTCI!5e0!3m2!1sen!2sin!4v1678123179319!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Vadodara',
            description: 'Befikrmove Packers And Movers provide professional packing and moving services in Vadodara at affordable prices. We have knowledgeable employees on staff who can manage loading, transportation, and packing. What sets our company apart from other removal service providers is our commitment to pricing and accessibility.',
            phone: 9328970777,
            address: 'Shop No-9,Nr S R Petrol Pump, Sayajipura, Ajwa Road Bridge Village, Ajwa Road, Vadodara',
            email: 'vadodara@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.7130886795644!2d73.18060941495523!3d22.326688085309847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf34b72f0c3b%3A0x6a5f1b2fffbe293!2sS.R.%20PETROL%20PUMP.%20Indian%20Oil.!5e0!3m2!1sen!2sin!4v1678123275859!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Bhagalpur',
            description: 'Homes and businesses can be shifted without any problems thanks to the packers and movers of Bhagalpur. Befikrmove offers a full range of relocation services in Bhagalpur at competitive prices, so you can trust us for a safe and smooth relocation experience within your price range.',
            phone: 7764046100,
            address: 'Complex, Radha Rani Sinha Road, Bhagalpur, Bihar-812001',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5536163460692!2d86.9817406144855!3d25.25195563567464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049ffc123f0af%3A0x829c8880d29ed30e!2sRadha%20Rani%20Sinha%20Rd%2C%20Adampur%2C%20Bhagalpur%2C%20Bihar%20812001!5e0!3m2!1sen!2sin!4v1678123345942!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Bhilai',
            description: 'Befikrmove Packers and Movers offer Logistics and Transportation, Domestic Packing and Moving Services, Local Moving, Relocation, and Packers and Movers in Bhilai. You can avail expert, top-notch packers and movers services from Packers and Movers in Bhilai with us.',
            phone: 7764046100,
            address: 'Church Road Supela Panch Rastha Bhilai, Chattisgarh 490023',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.266300817022!2d81.34428824533408!3d21.2067273145742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2922d9c6cfc991%3A0x9dc2556dd0547d0a!2sSupela%2C%20Bhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1678123440578!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Bhopal',
            description: 'Befikrmove Packers and Movers offer Logistics and Transportation, Domestic Packing and Moving Services, Local Moving, Relocation, and Packers and Movers in Bhilai. You can avail expert, top-notch packers and movers services from Packers and Movers in Bhilai with us.',
            phone: 9589584986,
            address: '52 rajnagar colony near truba college karoand, bhopal 462030',
            email: 'bhopal@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4100396860363!2d77.3918193149729!3d23.30087708481281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6924c92ff38f%3A0x4de30032ab90e09b!2sRajput%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1678123493267!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Bhubneswar',
            description: 'Befikrmove packers and movers provide expert moving services in Bhopal that make it simple and affordable to move your home, office, bike, automobile, or any other packing and work from one place to another within the city. Our professionals carefully monitor the entire process to ensure that all the goods are perfectly packed and ready for transportation when they are shifted from one place to another.',
            phone: 9078779231,
            address: '26/2789,Cenal Road,Shantinagar,Jharapara, bhubaneswar,odisha-751006',
            email: 'bhubneswar@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.327414803523!2d85.85908981492034!3d20.286710486405116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a08e18bf773%3A0xaf9e92578e862221!2s26%2C%20W%20Canal%20Rd%2C%20Dayanandnagar%2C%20Nigamananda%20Nagar%2C%20Rasulgarh%2C%20Bhubaneswar%2C%20Odisha%20751010!5e0!3m2!1sen!2sin!4v1678123560433!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Bilaspur',
            description: 'With the intention of providing quality and service, Befikrmove Packers & Movers in Bilaspur is the top Packers & Movers with an experience of years. Our staff members are well trained, polite and professional. We are renowned packers and movers across the market. With an aim to provide complete customer satisfaction, we offer Packing and Moving, Residential Moving, Business Moving, Industrial Moving, and International Moving services.',
            phone: 7764046100,
            address: '109, Sindhi Colony, Mandir Chowk, beside Equitas Small Finance Bank Limited, Jarhabhata, Bilaspur, Chhattisgarh 49500',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.238889252654!2d82.13748291495078!3d22.07869198543919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b6f3f7b0db1%3A0xe95d9dd1786bafcc!2sSadhana%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1678123632780!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Chennai',
            description: 'By relieving you of all stress and exceeding your expectations, we aim to improve your sifting experience. With our network across the city, we can provide you with services in any area within or outside Chennai. A very simple, smart and hassle-free contact us to avail our top-class moving services',
            phone: 9176009933,
            address: '74-A, Velachery Main Rd, Velachery, Chennai-600042 ',
            email: 'chennai@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8258872899683!2d80.21991091482211!3d12.98298559084838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d85e68b0815%3A0xdc769550f3101f1e!2s74A%2C%20Velachery%20Rd%2C%20Ram%20Nagar%2C%20Ramnagar%20South%2C%20Dhadeswaram%20Nagar%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1678123769377!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Chandigarh',
            description: 'Welcome to Befikrmove Packers & Movers! As one of the top movers and packers in Chandigarh, we have the required resources, skills, and knowledge to provide unmatched moving services. There is no limit to our ability to pick up goods from any location in Chandigarh and deliver them to the desired destination within or outside the country owing to our wide network across India. We have developed a straightforward and technologically sophisticated solution to your moving issues.',
            phone: 8591858064,
            address: '405 pipli wala town Manimajra, Chandigarh 160101',
            email: 'chandigarh@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8778753118654!2d76.82623951513123!3d30.72183348164093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f932b0239d01f%3A0x3763a79f5c1d5183!2s405%2C%20Pipliwala%20Town%2C%20Adarsh%20Nagar%2C%20Sector%2013%2C%20Chandigarh%2C%20160101!5e0!3m2!1sen!2sin!4v1678123835250!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Dehradun',
            description: 'Packers And Movers In Dehradun We aim to provide high quality services at reasonable prices. For your convenience, we provide the best packers and movers services in Dehradun to get you transferred from your desired location. We provided our services in Dehradun in a manner that exceeded the expectations of our clients.',
            phone: 7764046100,
            address: 'F-103, Saharnpur road,transport Nagar, Dehradun 248002',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.966223153311!2d78.00041611512108!3d30.2950231817919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bcca780ff25%3A0xa99a675da3020559!2s103%2C%20Saharanpur%20Rd%2C%20Sewla%20Kalan%2C%20Majra%2C%20Dehradun%2C%20Uttarakhand%20248171!5e0!3m2!1sen!2sin!4v1678123894287!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Dhanbad',
            description: 'Befikrmove Packers and Movers are the top Packers and Movers in Dhanbad, Jharkhand. We are a reputed company offering Moving and Packing services. All of us aim to select the most reputed and promising movers and packers in Dhanbad so that they work as per your expectations, provide quality services and guarantee that everything will be delivered at the desired location as it should be.',
            phone: 9308794171,
            address: 'Matkuria, Katras Rd, Near Mahindra Showroom, Jawahar Nagar, Dhanbad, Jharkhand 826001',
            email: 'dhanbad@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.03228534895!2d86.39601641649668!3d23.7916278920882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a337a9b5c34f%3A0xd89757eb491348be!2sMatkuria%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1678123980683!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Faridabad',
            description: 'Befikrmove Packers & Movers is the official Packers and Movers in Faridabad. Our office in Faridabad is effectively delighting clients across India with our experience in packing and moving services. This business is offering services keeping in mind the emotional importance of the customers representing the ethics and values of our country.',
            phone: 7764046100,
            address: 'B-1010, Green fields Colony, Sector 42/43, Faridabad-121009,Haryana',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.141204748754!2d77.2875127819263!3d28.463421519755276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79ba43a9447%3A0x93364b4abcec71f4!2sGreen%20field%20colony!5e0!3m2!1sen!2sin!4v1678124034808!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Gandhidham',
            description: 'Apart from offering packers and movers in Gandhidham, Befikramove also provides wooden crates for all types of consignment items. These services include home relocation, bike transportation, commercial goods transportation, office relocation, car transportation service, custom clearance for export or import, insurance, commercial goods transportation, cargo and courier services, employee relocation, and corporate relocation.',
            phone:936834897,
            address: 'Plot No 3, Ashapura Park, Meghpar, Bharuchi, Gandhidham',
            email: 'gandhidham@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5653713764987!2d70.09291491496867!3d23.07639063492593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b854873c9c61%3A0x9f3278c272c82977!2sAshapura%20Park%2C%20Ward%204B%2C%20Adipur%2C%20Gandhidham%2C%20Gujarat%20370205!5e0!3m2!1sen!2sin!4v1678124081469!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Ghaziabad',
            description: 'Ghaziabad is a district in the most populous state of Uttar Pradesh. The city undergoes a series of daily transfers. Keeping this fact in mind we have developed a well-organized branch office in Ghaziabad. We, as a company, are aware of the difficulties people face in commuting to or from Ghaziabad and hence are here to help them do so without any incident. That is why we are recommended as the top Packers & Movers in Ghaziabad',
            phone: 7764046100,
            address: '63 Ground Floor Vrindavan Garden Near Raj Bagh Metro Sahibabad, Ghaziabad',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3583644540217!2d77.34396991508366!3d28.67892478239951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbdd91f96c51%3A0x79f5af4f38f92f5f!2sMars%20Global%20Packers%20Movers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1678124140598!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Gurgaon',
            description: 'Packers and movers play an important role in Gurgaon. Relocation will be simple and convenient if you choose to use packing and moving in Gurgaon. From packaging your household items to your workplace furniture, we have the ideal moving experts for you. Therefore, there is no need to stress about loading, unloading or packing, and unpacking; Just inform us about your moving needs.',
            phone: 9212672222,
            address: 'Gurgaon	2893/4, 3rd Floor, Chuna Mandi, Pahar Ganj, New Delhi-55',
            email: 'gurgaon@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.0798432676!2d77.20667732544312!3d28.64354802965328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4225555555%3A0x7abd09ab4840b7aa!2sAadinath%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1678124193688!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Guwahati',
            description: 'Packers and movers in Guwahati are dependable moving professionals who make the laborious relocation process simple, convenient, and satisfying for their clients at reasonable moving charges. To make the complicated process of relocating easy for you, Guwahati moving firms provide services including packing, moving, loading, unloading, transportation, and unpacking. They have a pool of talented and knowledgeable employees who are experts in their individual fields.',
            phone: 6001740527,
            address: 'sonkuchi path, near spring dale I school, beharbari charali, NH37, Guwahati, Assam-781029',
            email: 'guwahati@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.683925596967!2d91.7699116150281!3d26.109234483480325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5eb9240449b9%3A0x88a8921406c55365!2sSpring%20Dale%20International%20School%2C%20Guwahati!5e0!3m2!1sen!2sin!4v1678124255206!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Gwalior',
            description: 'Being the top Packers And Movers in Gwalior, we aim to provide high-quality services at reasonable prices. We provide best packers and movers services in Gwalior which makes it easy for you to move to or from Gwalior to your preferred location. We deliver our services in Gwalior in a manner that exceeds the expectations of our clients.',
            phone: 9584691919,
            address: 'G-7 The Legacy Plaza, Airport Road, Gwalior, Madhya Pradesh 474005',
            email: 'gwalior@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4957367934144!2d78.2077976150309!3d26.245569583419528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6b8c2625a43%3A0x741c4e5b663592a1!2sAnki%20Group%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1678124302432!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Haridwar',
            description: 'The working team of the company featured on Befikrmove is modest and completes each and every project efficiently. They are proficient in providing a variety of services including packing, loading, unloading, and unpacking with utmost safety and care. The primary objective of Packers and Movers in Haridwar is to provide high-quality moving services to our clients. We are dedicated to using our capabilities and knowledge to make your transfer a safe and easy process for you.',
            phone: 7764046100,
            address: 'HP Petrol Pump SIDCUL Bypass, Bhadrabad Haridwar – 249402',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110639.26879025498!2d77.96234796656435!3d29.936951086431833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909485309acd913%3A0xa51fbd54831ecbb9!2sHP%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1678124394837!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Hyderabad',
            description: 'Are you looking for reputed packers and movers in Hyderabad, Telangana as you are planning to relocate? If your answer is yes then your search is over. We will put you in touch with only the most reliable movers and packers, whether you are looking to hire house moving services or business relocation services. Here, you can check their testimonials, rankings, list of services, and prices.',
            phone: 9394949408,
            address: '2-170/a youth colony old Haffezpet Miyapur, Hyderabad -500049 ',
            email: 'hyderabad@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4429071326226!2d78.35771281487774!3d17.486358388019376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9240ecf6ead9%3A0x8fe6d8059dd6f2d4!2s2%2C%20Youth%20Colony%20Rd%2C%20Sai%20Nagar%2C%20Hafeezpet%2C%20Hyderabad%2C%20Telangana%20500049!5e0!3m2!1sen!2sin!4v1678124591202!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Indore',
            description: 'We are a leading company in the packing and moving industry, providing a wide range of relocation services. As skilled packers and movers in Indore, we are providing satisfactory results keeping in mind the emotional importance attached to our valuable clients. With each new job we take up, the trust of people, both domestically and internationally, has helped us deliver better results.',
            phone: 9303024555,
            address: 'Shop.6 moulika homes kalp KanDhenu colony, velocity multiplex, Bhusa Mandi, Indore-452010',
            email: 'indore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5055282356875!2d75.9004012149627!3d22.746613185093505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2ab0affffff%3A0x574b5e54d1e5d550!2sSunny%20Express%20Cargo%20Movers!5e0!3m2!1sen!2sin!4v1678124657163!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Jabalpur',
            description: 'At Befikrmove Packers & Movers, we aim to provide high-quality services at reasonable prices. We provide the best packers and movers services in Jabalpur which makes it easy for you to drop from Jabalpur to your desired location. We have delivered our services in Jabalpur in a manner that exceeds the expectations of our clients.',
            phone: 9285187700,
            address: 'Shop No 5, Karondanala Near Katni ByPass,	Punjabi Tadka Restaurant, Madhya Pradesh 482004',
            email: 'jabalpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117330.74667049291!2d79.85262186727637!3d23.22175963791572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af9e9fc00ca9%3A0x38d31505d27d7dd1!2sH%20KGN%20GARAGE!5e0!3m2!1sen!2sin!4v1678124835349!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Jaipur',
            description: 'Looking for reputed and honest movers and packers in Jaipur? At that point, Befikrmove is the best place to stop your search. It serves as a one-stop resource for finding top Jaipur packers and movers in India. They have a vast roster of authorised packers and movers in Jaipur. So that people who need help moving home in Jaipur can easily access high-quality and affordable rehabilitation services.',
            phone: 7764046100,
            address: 'Plot No. 5, 200 Bypass Ajmer Road, Jivan Vihar Colony, Opp. Karni Vihar, Police Station, Jaipur, Rajasthan 302021',
            email: 'jaipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.189835513665!2d75.73021281504465!3d26.897469733134084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db586ac161e33%3A0x3e87d8f5fc6cc47f!2sOm%20Sai%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1678124944398!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Jammu',
            description: 'The top Packers and Movers in Jammu are Befikrmove Packers and Movers. In Jammu, we provide complete moving and packing services at reasonable prices. We are aware of the basic needs of our clients and offer a complete range of packing and moving services in Jammu. Your products are carefully packed by one of our qualified professionals without any damage. We use only the best material for packing.',
            phone: 9501131472,
            address: '444, Main GT Road, Samba, Bari Brahmana, Jammu, and Kashmir - 184121',
            email: 'jammu@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26878.87955350763!2d74.88031656233957!3d32.63655300795743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9c5bd1b99845%3A0x9783174f491d76a1!2sBari%20Brahmana%2C%20Jammu%20181133!5e0!3m2!1sen!2sin!4v1678125066159!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Jhansi',
            description: 'Owing to their wide experience in the packaging industry, Befikrmove packers and movers in Jhansi guarantee any type of property management on the occasion of relocation, eviction, and relocation of homes and businesses. One of the top movers and packers in Jhansi, we provide affordable services in the areas of loading and unloading, house moving, office moving, and car transport. We also provide reliable and speedy services in these areas.',
            phone: 9584691919,
            address: 'no 1733 khati baba tube well road near mount litra zee school, Jhansi',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.817710545128!2d78.53409381448944!3d25.444357227873663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397770e3c2d285f1%3A0x268a5b91c4d320ea!2sTube%20Well%20Rd%2C%20Khati%20Baba%2C%20Jhansi%2C%20Uttar%20Pradesh%20284003!5e0!3m2!1sen!2sin!4v1678125154743!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Jharsuguda',
            description: "Jharsuguda guarantees top-notch moving services and complete customer satisfaction. The biggest choice for you comes from the years of experience that we, Top Packers and Movers Jharsuguda have gained by operating in this field for the last 10+ years, irrespective of what type of goods or items you want to move or have to move. want to do The services of Befikrmove Packers & Movers - Jharsuguda is effectively delivered to the customer's location within the specified time frame.",
            phone: 7764046100,
            address: 'Dung Dung Complex, Shop No-10, Bombay Chowk, Jharsuguda, Odisha 768203',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.5306043676082!2d84.01358171494716!3d21.875634285545782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e69d90eaaf77%3A0x9b2a52af68d8343b!2sDungdung%20Complex!5e0!3m2!1sen!2sin!4v1678125213065!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Jodhpur',
            description: "We are a well-known company in the logistics and transportation sector, and we have been offering high-caliber services to our clients for many years. If you are thinking of visiting or visiting Jodhpur then you can contact us anytime. We help you move your personal and business belongings with ease and with utmost care. We are honored to be recognized as the top packers and movers in Jodhpur by our clients.",
            phone: 9799233390,
            address: 'Basni Police Station, Near Govt. School Jodhpur Rajasthan - 342005',
            email: 'jodhpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.988288265646!2d73.00522021503065!3d26.22957008342651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b46087ce337%3A0x269605ef4017562!2sBasni%20Police%20Station!5e0!3m2!1sen!2sin!4v1678125276485!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Kakinada',
            description: "One of the most reputed and well-known Packers and Movers in Kakinada is Befikrmove Packers and Movers, who are also renowned for providing the most sought-after domestic and international relocation services across India. Since long ago, it has been blessed with an efficient and knowledgeable staff of packers and movers, and the business takes pride in providing hassle-free packing and relocation services from Hyderabad to Kakinada or any other place.",
            phone: 7764046100,
            address: '11-11-2/A, Above Central Bank of India, Rama Rao Peta, Kakinada, Andhra Pradesh 533004',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30527.801674010083!2d82.21255132468391!3d16.97576970288464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38280da4740fa1%3A0x8738ca63ad5fe935!2sCENTRAL%20BANK%20OF%20INDIA%20-%20KAKINADA%20Branch!5e0!3m2!1sen!2sin!4v1678125359581!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Kanpur',
            description: "One of the most reputed packers and movers in Kanpur, we are more than happy to make your relocation as quick and stress-free as possible. We are a renowned logistics company with the capability of providing a first-class moving experience to our customers. We cater to every relocation demand from Kanpur with a tradition of providing foolproof services that are ready to meet your expectations and employ top-notch packing and moving techniques.",
            phone: 8736006262,
            address: 'S 3250, Avas Vikas Number 3, e.w, Kalyanpur, Kanpur,Uttar Pradesh 208017',
            email: 'kanpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.1868635937494!2d80.24155196794685!3d26.481927639341507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37c6594260ad%3A0xb3e65bf47334143a!2sAvas%20Vikas%20Number%203%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208017!5e0!3m2!1sen!2sin!4v1678125433771!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Kolkata',
            description: "Befikrmove is an internet directory or contact list for some of the most reputable packers and movers in different Indian locations. It serves as a platform to link clients with Kolkata's devoted and knowledgeable packers and movers. Customers may quickly get a list of reliable packing and moving businesses in Kolkata using this online directory of packers and movers. You may successfully complete relocation, home transferring, office relocating, or car relocation in Kolkata with the help of these mentioned moving firms in Kolkata.",
            phone: 7014095286,
            address: '35B, Majlish Ara Road, Mini Park, Kolkata - 700041',
            email: 'kolkata@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.3656719457977!2d88.32954571731122!3d22.490459501329088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718ebe44147b%3A0x5eccc7a7dad684e0!2s35%2Fb%2C%20Mazlish%20Ara%20Rd%2C%20Prafulla%20Sen%20Colony%2C%20Sarada%20Pally%2C%20Kolkata%2C%20West%20Bengal%20700041!5e0!3m2!1sen!2sin!4v1678125528642!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Lucknow',
            description: "Befikrmove, one of the leading Packers and Movers in Lucknow, provides reliable and prompt services in the field of Moving and Packing in Lucknow. We have established a reputation over the years that inspires our customers to use us again and again. Almost every day, we welcome new customers and work hard to spread the word about who we are. Contact us for packing and moving services in Lucknow, loading and unloading services in Lucknow, and all other moving services at affordable rates with safety and promptness.",
            phone: 7014095286,
            address: '35B, Majlish Ara Road, Mini Park, Kolkata - 700041',
            email: 'kolkata@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.365802899126!2d88.33158421495807!3d22.49045458522507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718ebe44147b%3A0x5eccc7a7dad684e0!2s35%2Fb%2C%20Mazlish%20Ara%20Rd%2C%20Prafulla%20Sen%20Colony%2C%20Sarada%20Pally%2C%20Kolkata%2C%20West%20Bengal%20700041!5e0!3m2!1sen!2sin!4v1678125629322!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Ludhiana',
            description: "At Befikrmove Packers & Movers, we aim to provide high quality services at reasonable prices. We provide the best packers and movers services in Ludhiana which makes it easy for you to move from Ludhiana to your preferred location. We have provided our services in Ludhiana in a manner that has exceeded the expectations of our clients.",
            phone: 9888322510,
            address: 'SCO-7, First Floor, Transport Nagar,Ludhiana - 141003, Punjab',
            email: 'ludhiana@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.7704393588649!2d75.87623285948902!3d30.90461439055676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83dfdbf5adf7%3A0x852edbf7a30f3ae4!2sDeepak%20Relocations%20India!5e0!3m2!1sen!2sin!4v1678125895378!5m2!1sen!2sin',
            photo: true
        },
        {
            city: 'Mysore',
            description: "Befikrmove provides services for domestic and international corporate relocation. We provide end-to-end services ranging from initial policy advisory services to safely delivering the products on the spot, which are efficiently handled by our professionals. The efficient team of Befikrmove top  Packers & Movers in Mysore highly customized services, takes care of every detail of the move as well as packs all the valuables with high-quality material.",
            phone: 9888322510,
            address: '148, Site No 06, Basaveshwar Nagar, 1st Stage Hebbala, Post, Metagalli, Mysore 570016',
            email: 'mysore@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.4431935263647!2d76.61414891481563!3d12.353217791263766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a4400000021%3A0xaaa548fd5da91e19!2sOm%20Sai%20Ram%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1678125964455!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Muzaffarpur',
            description: "Befikrmove Packers And Movers is the best and most trusted name in the Bihar city of Muzaffarpur Packers and Movers industry. Our moving and packing services are easy, safe, and reliable. We provide a variety of moving services to individuals and business organizations. We have over five years of expertise in handling a wide variety of items.",
            phone: 7764046100,
            address: 'Muzaffarpur',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114634.90084207541!2d85.31629657745587!3d26.12043372743219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e8a3175529%3A0x7c2d919680f759d!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1678126026834!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Meerut',
            description: "The challenging task of Befikrmove Packers And Movers in Meerut requires expert labour and state-of-the-art technology. Before products are packed and loaded into trucks, moving services will first evaluate the items to see if they can be moved. Movers and packers in Meerut are aware of the value of your asset. We provide the required safety and security for packers and movers in Meerut.",
            phone: 9027442551,
            address: '192/3, near Shri Durga Mata Mandir, Sector 3, Shastri Nagar, Meerut, Uttar Pradesh 250004	',
            email: 'meerut@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.72297006985!2d77.7265655939046!3d28.960931192278217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65f48c85e8cd%3A0xeec760510efb1389!2sKhushi%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1678126178092!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Mumbai',
            description: "Befikrmove Packers & Movers is one of the top Packers and Movers in Mumbai. We offer the best packers and movers, loading and unloading, household goods movement, transportation services, and car transport services at affordable rates. We as local packers and movers in Mumbai handle all relocation requirements in a safe and efficient manner.",
            phone: 7988475948,
            address: '13, 1st Floor, Rolan Compound, Ag Link Road, Next to BMC School Near Dhanlaxmi Building, Sakinaka 400072 Mumbai',
            email: 'mumbai@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.052965908757!2d72.88948411465434!3d19.103008188712227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c872271577eb%3A0xc96c0438a43db47f!2sKailash%20Puram%20Rd%2C%20Bandi%20Bazaar%2C%20Nair%20Wadi%2C%20Saki%20Naka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1678126315387!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Nagpur',
            description: "We provide shifting solutions and have over 10 years of experience. We are well aware of every nook and corner of Nagpur. Top movers and packers in Nagpur provide affordable moving services for houses, apartments, cars, bikes, and plants, and animals. Experienced and skilled movers packers in Nagpur have a good heart and intellect. They have skilled and knowledgeable personnel to sensitively render prompt, attentive, and pleasant services to the customers around Nagpur.",
            phone: 9325235587,
            address: 'Nagpur 40, 1st Floor, Suri Complex, Adarsh Nagar, Nagpur 440023',
            email: 'nagpur@befikarmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.76866978312!2d78.87044726249997!3d21.158903200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ea8bdf4e9a53%3A0xabc42e820cc77fea!2sSunny%20Express%20Cargo%20Movers!5e0!3m2!1sen!2sin!4v1678126395565!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Nashik',
            description: "Packers and movers in Nashik, Maharashtra are skilled packing and moving businesses that are authorized to do relocation work both in and outside Nashik. These moving companies guarantee a safe and secure moving experience to their customers with an efficient and qualified team of professionals. The befikrmove web directory has a reliable list of movers and packers in Nashik that you can use to make your relocation a wonderful one.",
            phone: 9371882040,
            address: '8, gajlaxmi rowhouse, Muralidhar Nagar,pathardi, phata,Nashik 422010',
            email: 'nashik@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.027041684042!2d73.74925971491513!3d19.965364986583946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb592321e53d%3A0x354c004d5e2fc5fd!2sGajlaxmi%20Row%20House!5e0!3m2!1sen!2sin!4v1678126450773!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Pune',
            description: "To meet the specific requirements of each of our clients, Befikrmove Packers And Movers offer comprehensive packing and moving services. Your items will be packed and moved safely and securely by our team of skilled experts who use the most up-to-date methods and equipment.",
            phone: 9860127272,
            address: 'Office No 3, Plot no 69, Sector no 23 Transport nagar Nigdi Pune-44',
            email: 'pune@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15119.881351986216!2d73.7588882289746!3d18.665326997196193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b75e85555555%3A0x5764e2813cc82ac8!2sODC%20Transport%20Company!5e0!3m2!1sen!2sin!4v1678126551543!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Raigarh',
            description: "Befikrmove is one of the oldest moving companies in your city and the Top Packers & Movers in Raigarh. We provide the best packaging to our clients. Befikrmove Packers And Movers In Raigarh Are Able To Manage In A Very Practical Way. Under the guidance of our ongoing experts, we provide professional packing services to provide a protective coating to your goods. Our top priority is to provide you with high-quality packing supplies.",
            phone: 9300808342,
            address: 'Shop No16,Sarangarh bus stand, sangitarai road, Raigarh',
            email: 'raigarh@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.386583174963!2d83.37712801494726!3d21.881184485542928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27251d64b27ae5%3A0x57d6e95b68404f3a!2sSarangarh%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1678126612711!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Raipur',
            description: "Packers and movers in Raipur, we aim to provide high-quality services at reasonable prices. We provide top packers and movers services in Raipur to make it easy for you to relocate to Raipur or to your preferred location. We deliver our services in Raipur in a manner that exceeds the expectations of our clients",
            phone: 8421099346,
            address: 'Ganga Vihar Colony, Amlidih, Krishaknagar, Raipur',
            email: 'raipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13802.70149750872!2d76.67591064999999!3d30.1320984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGanga%20Vihar%20Colony%2C%20Amlidih%2C%20Krishak%20Nagar%2C%20Raipur!5e0!3m2!1sen!2sin!4v1678126666987!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Rajkot',
            description: "Befikrmove Packers Movers provides you with a variety of qualified packers and movers services in Rajkot. Also, this is the place where you can get all the top discounts and deals offered by various packers and movers in Rajkot. Household moves can be stressful if not well-planned. We promise you a smooth and enjoyable move.",
            phone: 7764046100,
            address: 'Rajkot',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236295.70848689362!2d70.6812103892394!3d22.27342688376637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1678126716110!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Ranchi',
            description: "Befikrmove provides top-class packing and moving services in Ranchi. You can easily identify reputed Ranchi packers and movers by using this website. If you intend to move then you do not need to search for packers movers Ranchi everywhere. This is the ideal place to find contact details of reliable Packers & Movers in Ranchi.",
            phone: 9113417469,
            address: 'Near, Booty More Rd, Gautam Green City, Vijay Nagar, Ohdar Village, Ranchi, Jharkhand 835217',
            email: 'ranchi@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7558926758943!2d85.38400281497472!3d23.39704658476457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3846280273b%3A0xf8ab7a749c62fa08!2sBooty%20More%20Rd%2C%20Vijay%20Nagar%2C%20Ohdar%20Village%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1678126868087!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Rudrapur',
            description: "There is no set price for transportation services, and packing and moving is a daunting task. Top Packers and Movers in Rudrapur will provide you with the best movers and packers to make your relocation effortless. We all know that moving is a difficult process, and if you're a working person, it can be nearly impossible to schedule moving and shifting.",
            phone: 7764046100,
            address: 'Preet vihar colony near St marks school, Delhi-Rampur road, Rudrapur-263153',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27924.07115651118!2d79.38527613885061!3d28.972287516221876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fdaaaaaaaab%3A0x68919c7a5988b28b!2sSunny%20Express%20Cargo%20Movers!5e0!3m2!1sen!2sin!4v1678126962485!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Salem',
            description: "Best Packers and Movers in Salem, we aim to provide high-quality services at affordable prices. We provide the best packers and movers services in Salem to make it easy for you to move from Salem to your desired location. We have provided our services in Salem in a manner that exceeds the expectations of our clients.",
            phone: 7764046100,
            address: 'No. 3, Manimekali Complex, Trichy Main Road, Seelanaikapatti, Salem, Tamil Nadu, 636201',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.527116951478!2d78.1287539078125!3d11.613953700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babefea47dee4c9%3A0xc262bb7fb6e3570!2sHome%20To%20Home%20Packers%20and%20Movers%20%7C%20Best%20Packers%20and%20Movers%20Salem!5e0!3m2!1sen!2sin!4v1678127119478!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Sambalpur',
            description: "In the Sambalpur region of Orissa, Befikrmove are amongst the most renowned shifting experts, who impart shifting expertise in all business sectors. We are known as 'The Largest Mover of Household Items in India'. In our capacity as renowned packers and movers in Sambalpur, we endeavor to cater to the various relocation needs of people living in the Sambalpur district of Odisha and provide them with ongoing packing and moving assistance during their relocation process.",
            phone: 7764046100,
            address: 'NH-6, Bareipali,Near Reliance Petrol Pump (Map), Sambalpur - 768006',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59403.53257859862!2d83.93618023695299!3d21.479469603399313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a211737e43bf11d%3A0x9b816d467e05189e!2sReliance%20Petroleum!5e0!3m2!1sen!2sin!4v1678127196697!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Samastipur',
            description: "Finding top packers and movers in Samastipur can be challenging. One of the most trusted Packers and Movers in Samastipur, Befikrmove Packers and Movers is the ideal choice for any type of relocation services. We provide complete moving services for residential, commercial, or corporate relocation. Clients can avail of all types of packing and moving services at reasonable prices",
            phone: 7764046100,
            address: 'Near indian Oil Petrol Pump Tazpur Road Mushrigharari Samastipur 84101',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28735.627298082545!2d85.70406501562499!3d25.805111000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed9ac4ddd2c01f%3A0x946fade34468863c!2sIndian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1678127354978!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Satna',
            description: "We are the best packers and movers in Satna. The region is famous for its notable technology and business parks. We are the ideal moving partner if you are looking to commute to and from Satna and do not want to deal with the stress of packing and moving. We are a well-known business with many years of local moving experience, and we are dedicated to providing a door-to-door service for everyone.",
            phone: 7764046100,
            address: 'Jeevan Jyoti Colony Rd, behind IDBI Bank, Shakti Vihar, Jeevan Jyoti Colony, Satna, Madhya Pradesh 485001',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14514.188863363253!2d80.82976773061532!3d24.570304247063877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f08bfa110d9%3A0x6ab256df7d76dd50!2sIDBI%20Bank!5e0!3m2!1sen!2sin!4v1678127435795!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Surat',
            description: "As a result, finding top packers and movers in Surat can be a herculean endeavor for you. Many people move to Surat for various reasons, but once you experience the charm and beauty of this city you will not be able to forget it.  For all your moving needs in Surat at reasonable prices, turn to Befikrmove Packers And Movers. After using our packers and movers services you will never consider using any other service provider.",
            phone: 9898662924,
            address: '46, sai nagar housing soc dindoli Surat, Gujarat 394210',
            email: 'surat@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59542.13053190613!2d72.83142988543128!3d21.13714475045352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051687d34f28b%3A0xb2d697d6c4c11bd5!2sSAI%20NAGAR%20SOCIETY!5e0!3m2!1sen!2sin!4v1678127507454!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Sonbhadra',
            description: "Focus on all the positive possibilities and know that Befikrmove Packers And Movers in Sonbhadra is with you. Let us ease your stress and let you know that you are our first priority in every way. We know that selecting the best packers and movers in Sonbhadra can be difficult. Top Packers and Movers in Sonbhadra At Sonbhadra, Domestic and International Packers and Movers Services, we are fully capable and eager to assist you in relocating your household belongings.",
            phone: 7764046100,
            address: 'T P Nager, Unnamed Road, near Kashi More, Anpara, Sonebhadra Uttar Pradesh 231225',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.054316559789!2d82.78106021499002!3d24.204877184367284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f2501aa403f0f%3A0x747f7c3ff57932f9!2sVindhya%20Transport%20Corporation!5e0!3m2!1sen!2sin!4v1678127565740!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Udaipur',
            description: "Top packers and movers in Udaipur consider factors including business age, trust, reputation, excellence, quality of services, customer happiness and feedback, pricing, and value for money. Only the best is presented to you. Businesses that have been approved by our staff bear the Verified badge. Their business and contact details are updated regularly.",
            phone: 9329324555,
            address: '38 Ekling Colony, Behind Reliance Fresh, Hiran magri Sector 3, Udaipur - 313001',
            email: 'udaipur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.441599522545!2d73.72169591499717!3d24.573951584189867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef6ed9001e85%3A0x783e8b6de6755792!2sReliance%20Fresh!5e0!3m2!1sen!2sin!4v1678127628139!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Varanasi',
            description: "If you need to Best Packers and Movers in Varanasi, or relocate to any other city, then you must work with a reputed moving company. Our team has trained staff who take care of every aspect of the moving process. Can manage, from packing of goods to loading and unloading, etc. Befikrmove offers Varanasi house relocation services, compares moving costs, and chooses the company that best meets your demands.",
            phone: 7764046100,
            address: 'Maheshpur Block Road , Lahartara , Varanasi 221106',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13802.70149750872!2d76.67591064999999!3d30.1320984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMaheshpur%20Block%20Road%20%2C%20Lahartara%20%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1678127677361!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Vijayawada',
            description: "One of the top Packers and Movers in Vijayawada, Befikrmove Packers, and Movers provides services for packing and relocating anywhere in the world. Best Packers & Movers in Vijayawada take pride in introducing themselves as a top moving company that provides safe and reliable moving services including loading and unloading, domestic and international shifting, packing and unpacking, vehicle carrier transportation, and of course, warehousing.",
            phone: 7764046100,
            address: 'Shop No.-14, Ground Floor, H.R.T Complex, Housing Board Colony, Bhavanipuram, Vijayawada -520012(AP)',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15299.695515666885!2d80.58749577848744!3d16.529940167562593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efb210377df7%3A0xe50e0e09cf41316f!2sWorld%20first%20courier!5e0!3m2!1sen!2sin!4v1678127762666!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Visakhapatnam',
            description: "Moving involves many tedious tasks including packing the goods, loading and unloading them, moving them to the new location, unpacking them, and rearranging them appropriately. The process is made simple, more smooth, and hassle-free by professional packers and movers. The best packers and movers in Visakhapatnam are qualified to move all your belongings safely and securely to a new location within the same city or any other city.",
            phone: 7764046100,
            address: 'Visakhapatnam',
            email: 'info@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486416.746941072!2d82.98239708607812!3d17.738473385366245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1678127815538!5m2!1sen!2sin',
            photo: false
        },
        {
            city: 'Zirakpur',
            description: "We believe in customer satisfaction and always provide the best packers and movers in Zirakpur service on time. We provide exclusive, world-class, ISO certified, and ranked among the top quality Packers and Movers in Zirakpur providers across India. We have services across the globe. Befikrmove Packers & Movers in Zirakpur understand that packing and moving is not an easy task as it involves a long process and a range of services are required to complete the entire process.",
            phone: 8591858064,
            address: 'SCO-8, Cabin no-4 , First Floor, Above On Dot Courier , Ranjan plaza, Zirakpur (140603)',
            email: 'zirakhpur@befikrmove.com',
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0945307580073!2d76.81758851512971!3d30.659466481662783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb49707d9a51%3A0xe49a001fca14f59d!2sON%20Dot%20Courier%20%26%20Cargo%20Limited!5e0!3m2!1sen!2sin!4v1678127883619!5m2!1sen!2sin',
            photo: true
        }
    ];

    // console.log('lenght branches : ',branches.length);

    return (
        <>
            {branches.map((branch) => {
                if ((`packers-movers-${branch.city.toLowerCase()}` === name)) {
                    return (
                        <DetailItem
                            key={branch.city}
                            city={branch.city}
                            description={branch.description}
                            phone={branch.phone}
                            address={branch.address}
                            email={branch.email}
                            location={branch.location}
                            photo={branch.photo}
                        />
                    )
                }
            })}
        </>
    );
}
