export default function Contact(){
    return <div className="flex flex-col gap-[20px] px-[380px] py-8 ">
       <div className="flex flex-col gap-[20px]">
        <h2>Contact Us</h2>
        <p className="w-[624px] h-[103px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
       </div>
       <div className="flex gap-[50px] py-[10px]">
         <div className="flex flex-col gap-[10px] p-[16px] w-[260px]">
            <h4>Address</h4>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
         </div>
         <div className="flex flex-col gap-[10px] p-[16px] w-[260px]">
            <h4>Contact</h4>
            <p className="w-[160px]">313-332-8662
info@email.com</p>
         </div>
       </div>
    </div>
}