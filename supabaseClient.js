// supabaseClient.js

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = "https://lyqhwhrafbjjswsxyedf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cWh3aHJhZmJqanN3c3h5ZWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MDI5NDIsImV4cCI6MjA2OTI3ODk0Mn0.FEqBMQ4aUSBDoQwBm5l1_8yfv3mizhOytQVtV3DlID0";

export const supabase = createClient(supabaseUrl, supabaseKey);
