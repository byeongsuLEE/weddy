interface FileIconProps {
  h: number;
  w: number;
}

const FileIcon = ({w,h}:FileIconProps) =>{
  return(
  <>
  <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2 21.6H7.79995C5.81173 21.6 4.19995 19.9882 4.19995 18V5.99999C4.19995 4.01177 5.81173 2.39999 7.79995 2.39999H16.2C18.1882 2.39999 19.8 4.01177 19.8 5.99999V8.99999M15.6 7.19999H7.79995M12 10.8H7.79995M10.2 14.4H7.79995M13.8 14.7L15.19 14.005C16.2035 13.4982 17.3964 13.4982 18.4099 14.005L19.8 14.7C19.8 14.7 19.8 16.89 19.8 18.045C19.8 19.2 18.7323 19.9797 16.8 21.2C14.8676 19.9797 13.8 18.95 13.8 18.045V14.7Z" stroke="#787878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </>
  ) 
}
export default FileIcon;