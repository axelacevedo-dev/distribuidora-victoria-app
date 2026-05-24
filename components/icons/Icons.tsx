import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


interface IconsProps {
    color: string,
}

export function HomeIcon({ color }: IconsProps) {
    return (
        <FontAwesome name="home" size={24} color={color} />
    )
}

export function CatalogIcon({ color }: IconsProps) {
    return (
        <Ionicons name="bag-handle" size={24} color={color} />
    )
}

export function DesignerIcon({ color }: IconsProps) {
    return (
        <Ionicons name="color-palette" size={24} color={color} />
    )
}

export function ProfileIcon({color} : IconsProps){
    return (
        <Ionicons name="person-circle" size={24} color={color} />
    )
}