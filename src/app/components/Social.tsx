import Link from "next/link"



import {FaGithub , FaLinkedinIn } from "react-icons/fa"

type SocialProps = {
    containerStyles?: string; // Optional string type
    iconStyles?: string;      // Optional string type
  };

  const socials: { icon: JSX.Element; path: string }[] = [
    { icon: <FaGithub />, path: 'https://github.com/alihassan2345' },
    { icon: <FaLinkedinIn />, path: 'www.linkedin.com/in/ali-hassan-01486a284' },
   
  ];
  
  const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Link           
          href={item.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer">
              {item.icon}

          </Link>
        ))}
      </div>
    );
  }

export default Social