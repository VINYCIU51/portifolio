import styles from "./ProfilePhoto.module.css";
import { normalizeValue } from "../../../utils/normalizeCssValue";

interface PhotoProps  {
    path : string;
    size? : string | number;
    borderRadius? : string;
}

export const ProfilePhoto = ({
     path,
     size = "10px",
     borderRadius = "50%"
    } : PhotoProps) => {

        let normalizedSize = normalizeValue(size);
        let normalizedRadius = normalizeValue(borderRadius);

        return <
        img src = { path }
        className = { styles.photo }
        style = {{ 
            '--size': `${ normalizedSize }`, 
            '--radius': `${ normalizedRadius }`
        } as React.CSSProperties}
        />
}