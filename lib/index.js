require('./resource_history');
import { SnomedCT } from './snomed-ct';

export function processSnomedSubstance() {  
  let snomedCT = new SnomedCT();
  snomedCT.extractSubstance();
}