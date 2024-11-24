import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp2 from '../../hooks/useHttp2';

const TabButton = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 font-semibold rounded-t-lg ${active
            ? 'bg-white text-blue-600 border-t-2 border-blue-600'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
    >
        {children}
    </button>
);

const View = () => {

    const { id } = useParams()
    const { sendRequest, isLoading } = useHttp2()
    const [activeTab, setActiveTab] = useState('basic');
    const [student, setStudent] = useState({})

    //   const student = {
    //     student_name: "JUHI",
    //     student_father_name: "HJGJHGJH",
    //     student_mother_name: "DFGDFGD",
    //     dob_in_figures: "2000-01-01",
    //     dob_in_words: "ONE JANUARY TWO THOUSAND",
    //     additional_subject: "maths",
    //     gender: "female",
    //     caste_category: "general",
    //     student_address_mohalla: "MAIN STREET",
    //     student_address_po: "POST OFFICE",
    //     student_address_sub_div: "SUBDIVISION",
    //     student_address_pin: "654321",
    //     student_address_ps: "POLICE STATION",
    //     student_address_dist: "DISTRICT",
    //     student_email: "JOIS@EXAMPLE.COM",
    //     student_mobile_number: "9116873604",
    //     student_aadhar_number: "121199981634",
    //     nationality: "indian",
    //     religion: "hindu",
    //     handicapped: "none",
    //     student_category: "regular",
    //     student_photo: "/api/placeholder/150/150",
    //     student_signature: "/api/placeholder/200/100",
    //     parent_signature: "/api/placeholder/200/100",
    //     center: {
    //       school_name: "ABC School",
    //       school_category: "429",
    //       school_level: "primary",
    //       school_district: "XYZ District",
    //       school_mobile_no: "1234567890",
    //       school_pincode: "123456",
    //       center_address: "School Address",
    //     }
    //   };

    useEffect(() => {
        sendRequest({ url: `student/${id}` }, res => {
            setStudent(res.data)
        })
    }, [])


    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center space-x-6">
                        <img
                            src={student?.student_photo}
                            alt="Student"
                            className="w-24 h-24 object-cover border-4 border-white shadow-lg"
                        />
                        <div className="text-white">
                            <h1 className="text-3xl font-bold">{student?.student_name}</h1>
                            <p className="text-blue-100">Student ID: {student?.student_aadhar_number}</p>
                            <p className="text-blue-100">{student?.center?.school_name}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-2 mb-6">
                    <TabButton
                        active={activeTab === 'basic'}
                        onClick={() => setActiveTab('basic')}
                    >
                        Basic Info
                    </TabButton>
                    <TabButton
                        active={activeTab === 'family'}
                        onClick={() => setActiveTab('family')}
                    >
                        Family Details
                    </TabButton>
                    <TabButton
                        active={activeTab === 'address'}
                        onClick={() => setActiveTab('address')}
                    >
                        Address
                    </TabButton>
                    <TabButton
                        active={activeTab === 'documents'}
                        onClick={() => setActiveTab('documents')}
                    >
                        Documents
                    </TabButton>
                    <TabButton
                        active={activeTab === 'school'}
                        onClick={() => setActiveTab('school')}
                    >
                        School Info
                    </TabButton>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {/* Basic Info Tab */}
                    {activeTab === 'basic' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800">Name</label>
                                        <p className="mt-1 text-gray-700">{student?.student_name}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                                        <p className="mt-1 text-gray-900">{student?.dob_in_words}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Gender</label>
                                        <p className="mt-1 text-gray-900">{student?.gender}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Email</label>
                                        <p className="mt-1 text-gray-900">{student?.student_email}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Mobile</label>
                                        <p className="mt-1 text-gray-900">{student?.student_mobile_number}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Family Details Tab */}
                    {activeTab === 'family' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Family Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Father's Name</label>
                                    <p className="mt-1 text-gray-900">{student?.student_father_name}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Mother's Name</label>
                                    <p className="mt-1 text-gray-900">{student?.student_mother_name}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Address Tab */}
                    {activeTab === 'address' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Address Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Mohalla</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_mohalla}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Post Office</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_po}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Police Station</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_ps}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Sub Division</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_sub_div}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">District</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_dist}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">PIN Code</label>
                                        <p className="mt-1 text-gray-900">{student?.student_address_pin}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Documents & Signatures</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Student Photo</label>
                                    <img
                                        src={student?.student_photo}
                                        alt="Student"
                                        className="w-40 h-32 object-cover rounded-lg border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Student Signature</label>
                                    <img
                                        src={student?.student_signature}
                                        alt="Student Signature"
                                        className="w-40 h-32 object-cover rounded-lg border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Parent Signature</label>
                                    <img
                                        src={student?.parent_signature}
                                        alt="Parent Signature"
                                        className="w-40 h-32 object-cover rounded-lg border"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* School Info Tab */}
                    {activeTab === 'school' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">School Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* School Image Section */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">School Principal Signature</label>
                                        <img
                                            src={student?.center?.school_principal_signature}
                                            alt="Principal Signature"
                                            className="w-40 h-32 object-cover rounded-lg border mt-2"
                                        />
                                    </div>
                                </div>

                                {/* First Column of Information */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">School Name</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_name}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">School Level</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_level}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">School Category</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_category}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">School Address</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.center_address}</p>
                                    </div>
                                </div>

                                {/* Second Column of Information */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">District</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_district}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Contact Number</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_mobile_no}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">PIN Code</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.school_pincode}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">Email</label>
                                        <p className="mt-1 text-gray-900">{student?.center?.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default View;