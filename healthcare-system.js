class Patient {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getLocation() {
        return this.location;
    }
}

class Hospital {
    constructor() {
        this._patientList = [];
    }

    registerPatient(patient) {
        this._patientList.push(patient);
    }

    calculatePercentage() {
        if (this._patientList.length === 0) {
            throw new Error("No patients registered.");
        }

        let bangalorePatients = 0;
        this._patientList.forEach((patient) => {
            if (patient.getLocation().toLowerCase() === "bangalore") {
                bangalorePatients++;
            }
        });

        const totalPatients = this._patientList.length;
        const percentageBangalore = (bangalorePatients / totalPatients) * 100;
        const percentageOutstation = 100 - percentageBangalore;

        return {
            bangalore: percentageBangalore.toFixed(2),
            outstation: percentageOutstation.toFixed(2),
        };
    }
}

// Example usage
try {
    const hospital = new Hospital();

    const patient1 = new Patient("John Doe", "Bangalore");
    const patient2 = new Patient("Jane Doe", "Outstation");
    const patient3 = new Patient("Alice", "Bangalore");

    hospital.registerPatient(patient1);
    hospital.registerPatient(patient2);
    hospital.registerPatient(patient3);

    const percentage = hospital.calculatePercentage();
    console.log(`Percentage of Bangalore Patients: ${percentage.bangalore}%`);
    console.log(`Percentage of Outstation Patients: ${percentage.outstation}%`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
