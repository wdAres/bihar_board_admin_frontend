import React, { useEffect, useState } from 'react';
import classes from './StudentDetails.module.css';
import useHttp2 from '../../../hooks/useHttp2';
import { useParams } from 'react-router';
import { BASE_API } from '../../../utils/BASE_URL';

const StudentDetails = () => {

    const { sendRequest, isLoading } = useHttp2();
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        sendRequest({ url: `student/${id}` }, res => {
            setStudent(res.data);
        });
    }, [id, sendRequest]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <div className={classes.photo}>
                    <img src={student.student_photo} alt="Student" />
                </div>
                <div className={classes.header_inner}>
                    <div className={classes.row}>
                        <div className={classes.left}>Student Name</div>
                        <div className={classes.right}>{student.student_name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Student Email</div>
                        <div className={classes.right}>{student.student_email}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Student Mobile</div>
                        <div className={classes.right}>{student.student_mobile_number}</div>
                    </div>
                </div>
            </div>

            <div className={classes.divison}>
                <h4 className={classes.h4}>Student Details</h4>
                <div className={classes.divison_inputs}>
                    <div className={classes.row}>
                        <div className={classes.left}>Father Name</div>
                        <div className={classes.right}>{student.student_father_name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Mother Name</div>
                        <div className={classes.right}>{student.student_mother_name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>DOB (in figures)</div>
                        <div className={classes.right}>{new Date(student.dob_in_figures).toLocaleDateString()}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>DOB (in words)</div>
                        <div className={classes.right}>{student.dob_in_words}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Gender</div>
                        <div className={classes.right}>{student.gender}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Aadhar Number</div>
                        <div className={classes.right}>{student.student_aadhar_number}</div>
                    </div>
                </div>
            </div>

            <div className={classes.divison}>
                <h4 className={classes.h4}>Student Address</h4>
                <div className={classes.divison_inputs}>
                    <div className={classes.row}>
                        <div className={classes.left}>Mohalla</div>
                        <div className={classes.right}>{student.student_address_mohalla}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>P.O</div>
                        <div className={classes.right}>{student.student_address_po}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Sub Division</div>
                        <div className={classes.right}>{student.student_address_sub_div}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Pincode</div>
                        <div className={classes.right}>{student.student_address_pin}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>P.S</div>
                        <div className={classes.right}>{student.student_address_ps}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>District</div>
                        <div className={classes.right}>{student.student_address_dist}</div>
                    </div>
                </div>
            </div>

            <div className={classes.divison}>
                <h4 className={classes.h4}>Student Additional Information</h4>
                <div className={classes.divison_inputs}>
                    <div className={classes.row}>
                        <div className={classes.left}>Nationality</div>
                        <div className={classes.right}>{student.nationality}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Religion</div>
                        <div className={classes.right}>{student.religion}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Caste Category</div>
                        <div className={classes.right}>{student.caste_category}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Handicapped</div>
                        <div className={classes.right}>{student.handicapped}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Student Category</div>
                        <div className={classes.right}>{student.student_category}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>Additional Subject</div>
                        <div className={classes.right}>{student.additional_subject}</div>
                    </div>
                </div>
            </div>

            <div className={classes.divison}>
                <h4 className={classes.h4}>School Information</h4>
                <div className={classes.divison_inputs}>
                    <div className={classes.row}>
                        <div className={classes.left}>School Name</div>
                        <div className={classes.right}>{student.center.school_name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>School Category</div>
                        <div className={classes.right}>{student.center.school_category}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>School Level</div>
                        <div className={classes.right}>{student.center.school_level}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>School District</div>
                        <div className={classes.right}>{student.center.school_district}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>School Mobile No</div>
                        <div className={classes.right}>{student.center.school_mobile_no}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.left}>School Pincode</div>
                        <div className={classes.right}>{student.center.school_pincode}</div>
                    </div>
                    <div className={`${classes.row_100}`}>
                        <div className={classes.left}>Center Address</div>
                        <div className={classes.right}>{student.center.center_address}</div>
                    </div>
                </div>
            </div>
            <div className={classes.divison}>
                <h4 className={classes.h4}>Student Documents</h4>
                <div className={classes.divison_inputs}>
                    <div className={`${classes.row} ${classes.file_row}`}>
                        <div className={classes.file}>
                            <img src={student.student_signature} alt="Student Signature" />
                        </div>
                        <div className={classes.left}>Student Signature</div>
                    </div>
                    <div className={`${classes.row} ${classes.file_row}`}>
                        <div className={classes.file}>
                            <img src={student.parent_signature} alt="Parent Signature" />
                        </div>
                        <div className={classes.left}>Parent Signature</div>
                    </div>
                </div>
            </div>
            <div className={classes.divison}>
                <h4 className={classes.h4}>School Documents</h4>
                <div className={classes.divison_inputs}>
                    <div className={`${classes.row} ${classes.file_row}`}>
                        <div className={classes.file}>
                            <img src={`${BASE_API}/${student.center.school_principal_signature}`} alt="Principal Signature" />
                        </div>
                        <div className={classes.left}>Principal Signature</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentDetails;
