import { FaInstagram, FaFacebook, FaYoutube, FaPinterest, FaTwitter } from 'react-icons/fa';

export default function Ms({fbSlug}) {
    return (
        <div className="flex space-x-4 ml-5">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.szczyptaprzygod.pl/${fbSlug}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://www.youtube.com/@SzczyptaPrzygod" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 text-gray-500 hover:text-gray-900" />
            </a>
        </div>
    );
}