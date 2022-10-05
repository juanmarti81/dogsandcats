import {Footer} from "flowbite-react";
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter} from "react-icons/ti";
export const PageFooter = () => {
  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Flowbite Logo"
              href="https://flowbite.com"
              name="Cats & Dogs"
              src="https://flowbite.com/docs/images/logo.svg"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Cats & Dogs</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Cats & Dogs" href="#" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={TiSocialFacebook} />
            <Footer.Icon href="#" icon={TiSocialInstagram} />
            <Footer.Icon href="#" icon={TiSocialTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
