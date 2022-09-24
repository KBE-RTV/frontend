import { CloseButton, PlanetarySystemDetails, PopupContainer, PopupField } from "./style"

interface ProductDetailData {
    closePopup: () => void;
}

export const PlanetarySystemDetailPopup = ({closePopup}: ProductDetailData) => {
    return (
        <PopupContainer>
            <PopupField>
                <PlanetarySystemDetails>Details coming...</PlanetarySystemDetails>
                <CloseButton onClick={closePopup}>Close</CloseButton>
            </PopupField>
        </PopupContainer>
    )
}