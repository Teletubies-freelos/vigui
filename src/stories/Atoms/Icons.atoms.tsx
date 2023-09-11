import { 
  LaptopIcon, 
  DispositivesIcon, 
  FolderIcon, 
  InstallationIcon, 
  ReconectionIcon, 
  MeterIcon, 
  RouterIcon
} from "@/components/icons"
import { Box } from "@mui/material"

export const IconsShowCase = () => {
  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={'2rem'}>
      <LaptopIcon />
      <DispositivesIcon />
      <FolderIcon />
      <InstallationIcon />
      <ReconectionIcon />
      <RouterIcon />
      <MeterIcon />
    </Box>
  )
}
