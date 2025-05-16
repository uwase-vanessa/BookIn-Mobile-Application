import { ButtonProps, TextInputProps } from "react-native";

// Interface for custom button component props
export interface CustomButtonProps extends ButtonProps {
    onPress: () => void;         // Function to call when button is pressed
    containerStyle?: any;        // Optional style for the button container
    textStyle?: any;             // Optional style for the button text
    title: string;               // Button label text
}

// Interface for custom input component props
export interface CustomInputProps extends TextInputProps {
    onChangeText: (text: string) => void; // Function to call when text changes
    labelText?: string;                   // Optional label text above the input
    labelStyle?: any;                     // Optional style for the label
    placeholder?: string;                 // Optional placeholder text
    containerStyle?: any;                 // Optional style for the input container
    iconRight?: any;                      // Optional icon to display on the right
}

// Interface for search input component props (similar to CustomInputProps)
export interface SearchInputProps extends TextInputProps {
    onChangeText: (text: string) => void; // Function to call when text changes
    labelText?: string;                   // Optional label text above the input
    labelStyle?: any;                     // Optional style for the label
    placeholder?: string;                 // Optional placeholder text
    containerStyle?: any;                 // Optional style for the input container
    iconRight?: any;                      // Optional icon to display on the right
}

// Interface for doctor card component props
export interface DoctorCardProps {
    image: any;               // Image source for the doctor's photo
    name: string;             // Doctor's name
    department: any;          // Department or specialty (type can be refined)
    rating: number;           // Doctor's rating (e.g., out of 5)
    distanceFromYou: number;  // Distance from the user (e.g., in km)
}

// This code defines TypeScript interfaces—which are like blueprints for how data should look—
// particularly for props passed to components like buttons, text inputs, and cards.