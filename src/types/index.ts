export type Language = 'en' | 'te' | 'hi';

export type UserRole = 'PATIENT' | 'DOCTOR';

export type AIContextType = 
  | 'SYMPTOM_GUIDANCE'
  | 'DOCTOR_COMMUNICATION'
  | 'MEDICINE_SCAN'
  | 'HEALTHCARE_CALL'
  | 'FACILITY_SEARCH'
  | 'FOLLOW_UP';

export type PageView = 
  | 'splash'
  | 'auth'
  | 'role_select'
  | 'dashboard'
  | 'guide'
  | 'doctor'
  | 'doctor_dashboard'
  | 'doctor_patients'
  | 'doctor_patient_detail'
  | 'medicine'
  | 'calls'
  | 'facilities'
  | 'offline'
  | 'worker'
  | 'profile'
  | 'family'
  | 'followups'
  | 'notifications'
  | 'requests'
  | 'consultation';

export interface UserProfile {
  id: string;
  name: string;
  mobile: string;
  age: number;
  gender: string;
  preferredLanguage: Language;
  location: string;
  emergencyContact: string;
  isGuest: boolean;
  role: 'PATIENT';
}

export interface DoctorProfile {
  id: string;
  name: string;
  doctorId: string; // Medical license / ID
  mobile: string;
  email: string;
  specialization: string;
  preferredLanguage: Language;
  facility: string;
  location: string;
  isVerified: boolean;
  role: 'DOCTOR';
}

export interface HealthcareRequest {
  id: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  patientGender: string;
  patientMobile: string;
  description: string;
  language: Language;
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
  status: 'PENDING' | 'ACCEPTED' | 'IN_CONSULTATION' | 'COMPLETED' | 'REJECTED';
  consultationType: 'Chat' | 'Voice' | 'Video' | 'Healthcare Facility';
  location: string;
  createdAt: string;
  doctorId?: string;
  doctorNotes?: string;
}

export interface AppNotification {
  id: string;
  userId: string; // patientId or doctorId or 'ALL'
  role: UserRole | 'ALL';
  title: string;
  message: string;
  type: 'REQUEST' | 'RESPONSE' | 'CONSULTATION' | 'FOLLOWUP' | 'EMERGENCY' | 'SYSTEM';
  read: boolean;
  timestamp: string;
  actionPage?: PageView;
  requestId?: string;
}

export interface Consultation {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  type: 'Video' | 'Voice' | 'Chat';
  status: 'SCHEDULED' | 'ACTIVE' | 'ENDED';
  startedAt: string;
  endedAt?: string;
  notes?: string;
  prescriptionSummary?: string;
}

export interface FollowUp {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string; // YYYY-MM-DD
  time?: string;
  status: 'UPCOMING' | 'PENDING' | 'COMPLETED' | 'CANCELLED';
  notes: string;
  instructionsEn: string;
  instructionsTe: string;
  reminderSet: boolean;
}

export interface HealthcareActivity {
  id: string;
  type: 'AI_GUIDANCE' | 'DOCTOR_NOTE' | 'MEDICINE_SCAN' | 'CALL_LOG' | 'FACILITY_SEARCH' | 'REQUEST_SUBMITTED' | 'CONSULTATION_JOINED';
  title: string;
  summary: string;
  timestamp: string;
}

export interface StructuredDoctorNote {
  patientName: string;
  age: number;
  gender: string;
  primaryLanguage: string;
  chiefComplaint: string;
  duration: string;
  pattern: string;
  associatedSymptoms: string[];
  spokenSummaryEn: string;
  spokenSummaryTe: string;
  timestamp: string;
}

export interface MedicineDetails {
  id: string;
  tradeName: string;
  genericName: string;
  strength: string;
  dosageForm: string;
  manufacturer: string;
  batchNumber: string;
  expiryDate: string | null;
  composition: string;
  purposeEn: string;
  purposeTe: string;
  whenToTakeVerified: boolean;
  whenToTakeEn?: string;
  whenToTakeTe?: string;
  frequencyEn?: string;
  instructionsEn: string;
  instructionsTe: string;
  warningsEn: string[];
  warningsTe: string[];
  imageUrl: string;
  ageGroupDosage?: {
    group: 'Infants' | 'Children' | 'Teenagers' | 'Adults' | 'Older Adults';
    guidance: string;
    isVerified: boolean;
  }[];
}

export interface HealthcareFacility {
  id: string;
  name: string;
  type: 'PHC' | 'CHC' | 'Govt Hospital' | 'District Hospital' | 'Specialist Center';
  district: string;
  city: string;
  distanceKm: number;
  addressEn: string;
  addressTe: string;
  contactNumber: string;
  servicesEn: string[];
  servicesTe: string[];
  isEmergencyAvailable: boolean;
  languageSupport: string[];
  isOpen24x7: boolean;
  status: 'Open' | 'Busy' | 'On Call';
  matchScore: number;
  matchReasons: string[];
  latitude: number;
  longitude: number;
  operatingHours?: string;
}

export interface OfflineRequest {
  id: string;
  type: 'SYMPTOM' | 'DOCTOR_NOTE' | 'MEDICINE' | 'FACILITY_INQUIRY';
  title: string;
  content: string;
  language: Language;
  createdAt: string;
  syncStatus: 'PENDING' | 'SYNCED';
  patientId: string;
}

export interface WorkerPatientRecord {
  id: string;
  patientName: string;
  age: number;
  village: string;
  primaryLanguage: Language;
  chiefConcern: string;
  status: 'Pending Review' | 'Reviewed' | 'Follow-up Scheduled' | 'Resolved';
  priority: 'High' | 'Medium' | 'Normal';
  timestamp: string;
  summaryEn: string;
  summaryTe: string;
  phone: string;
  doctorAssigned?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: 'Self' | 'Mother' | 'Father' | 'Spouse' | 'Child' | 'Grandparent';
  age: number;
  gender: string;
  bloodGroup: string;
  chronicConditions: string[];
  lastConsultation?: string;
  pendingReminders: string[];
}

export interface AICommunicatorTranslation {
  originalText: string;
  sourceLang: Language;
  targetLang: Language;
  translatedText: string;
  simplifiedExplanation: string;
  audioPlaying?: boolean;
}
