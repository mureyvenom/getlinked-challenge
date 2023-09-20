import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Layout from "../../components/Layout";
import register from "../../assets/images/register.svg";
import mobileregister from "../../assets/images/register-mobile.svg";
import movement from "../../assets/images/movement.svg";
import star from "../../assets/images/star.svg";
import congrats from "../../assets/images/congrats.svg";
import gradientstar from "../../assets/images/gradient-star.svg";
import starsecondary from "../../assets/images/star-secondary.svg";
import flare1 from "../../assets/images/contact-flare-1.png";
import flare2 from "../../assets/images/contact-flare-2.png";
import mobilecontactflare from "../../assets/images/mobile-contact-flare.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Sparkle from "react-sparkle";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Select from "../../components/Select";
import axios from "axios";
import { baseUrl } from "../../utils/helpers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    team_name: yup.string().required("Team Name is required"),
    group_size: yup.string().required("Group Size is required"),
    project_topic: yup.string().required("Project Topic is required"),
    category: yup.string().required("Category is required"),
  })
  .required();

const Register = () => {
  const isMobileScreen = useCheckMobileScreen();
  const [checked, setChecked] = useState(false);
  const [catLoading, setCatLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [err, setErr] = useState("");
  const [catErr, setCatErr] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const transformedCategories = useMemo(
    () =>
      categories.map((c) => ({
        title: c.name,
        value: c.name,
      })),
    [categories]
  );

  const loadCategories = useCallback(async () => {
    try {
      setCatLoading(true);
      setCatErr("");
      const response = await axios.get(`${baseUrl}/hackathon/categories-list`);
      setCategories(response.data);
      setCatLoading(false);
    } catch (error) {
      console.log(error);
      setCatLoading(false);
      setCatErr(
        "Something went wrong fetching categories. Kindly reload this page to try again"
      );
    }
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    register: reg,
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      email: "",
      group_size: "",
      phone: "",
      project_topic: "",
      team_name: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = useCallback(
    async (cred: any) => {
      try {
        if (!checked) {
          setErr("Kindly agree to the event terms and conditions to proceed");
          return;
        }
        setLoading(true);
        setErr("");
        const selectedCategory = categories.find(
          (c) => c.name === cred.category
        );
        await axios.post(`${baseUrl}/hackathon/registration`, {
          email: cred.email,
          phone_number: cred.phone,
          team_name: cred.team_name,
          group_size: cred.group_size,
          project_topic: cred.project_topic,
          category: selectedCategory?.id || 1,
          privacy_poclicy_accepted: true,
        });
        setSuccess(true);
        setLoading(false);
        formRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        reset();
        setChecked(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setErr("Something went wrong");
        formRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [checked, categories, reset]
  );

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <Layout>
        <div className="flex md:flex-row flex-col w-full relative md:pt-28 min-h-screen">
          <Sparkle overflowPx={0} count={40} maxSize={3} flicker={false} />
          <div className="absolute md:top-[60px] md:left-[205px] top-5 left-[44%]">
            <img
              src={gradientstar}
              alt="gradientstar"
              className="md:w-[21px] w-[11px]"
            />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <div className="absolute md:bottom-[248px] md:left-[40%] left-[34px] bottom-[163px]">
            <img
              src={starsecondary}
              alt="starsecondary"
              className="md:w-[21px] w-[12px]"
            />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <div className="absolute md:top-5 md:right-[235px] opacity-40 right-[57px] top-20">
            <img src={star} alt="star" className="md:w-[21px] w-[16px]" />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <div className="absolute md:bottom-[115px] md:right-[128px] right-[27px] bottom-[200px]">
            <img src={star} alt="star" className="md:w-[21px] w-[12px]" />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <img
            src={isMobileScreen ? mobilecontactflare : flare1}
            alt="flare"
            className="absolute md:-top-[52px] md:-left-[228px] -top-9 -left-3 blur-lg opacity-50"
          />
          {!isMobileScreen && (
            <img
              src={flare2}
              alt="flare"
              className="absolute md:bottom-[0px] md:-right-[10%] blur-lg opacity-50"
            />
          )}
          {!isMobileScreen && (
            <div className="">
              <img src={register} alt="" />
            </div>
          )}
          <div className="md:pr-[105px] z-[6683]">
            <div
              ref={formRef}
              className="md:bg-white shadow-md md:mb-[115px] md:bg-opacity-[0.03] md:py-[75px] py-[50px] px-12 rounded-xl md:px-[70px] md:w-[620px]"
            >
              <div className="font-clash font-semibold text-accent md:text-[32px] md:mb-9 mb-6">
                Register
              </div>
              {isMobileScreen && (
                <div className="flex justify-center items-center mb-5 mt-7">
                  <img src={mobileregister} alt="register" />
                </div>
              )}
              <div className="flex md:mb-5 items-end md:gap-x-0 gap-x-2 justify-center md:justify-start mb-2">
                <div className="text-xs">Be part of this movement!</div>{" "}
                <img src={movement} alt="movement" />
              </div>
              <div className="md:text-2xl md:mb-8 text-xl mb-6 text-center md:text-left">
                CREATE YOUR ACCOUNT
              </div>
              {err && <div className="text-sm my-3 text-accent">{err}</div>}
              <div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
                  <Input
                    placeholder="Enter your group name"
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Team’s Name"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "14px",
                    }}
                    error={errors.team_name?.message}
                    {...reg("team_name")}
                  />
                  <Input
                    placeholder="Enter your phone number"
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Phone"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "14px",
                    }}
                    error={errors.phone?.message}
                    {...reg("phone")}
                  />
                  <Input
                    placeholder="Enter your email address"
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Email"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "14px",
                    }}
                    error={errors.email?.message}
                    {...reg("email")}
                  />
                  <Input
                    placeholder="What is your group project topic"
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Project Topic"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "14px",
                    }}
                    error={errors.project_topic?.message}
                    {...reg("project_topic")}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-[2fr_1fr] gap-x-8 gap-y-0">
                  <Select
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Category"
                    style={{
                      paddingLeft: "20px",
                      marginRight: "20px",
                      fontSize: "14px",
                    }}
                    title={
                      catLoading
                        ? "Loading categories..."
                        : "Select your category"
                    }
                    data={transformedCategories}
                    error={catErr || errors.category?.message}
                    {...reg("category")}
                  />
                  <Select
                    className="placeholder:opacity-25 text-sm !md:px-6"
                    label="Group Size"
                    style={{
                      paddingLeft: "20px",
                      marginRight: "20px",
                      fontSize: "14px",
                    }}
                    title="Select"
                    data={[
                      { title: "1", value: "1" },
                      { title: "2", value: "2" },
                      { title: "3", value: "3" },
                      { title: "4", value: "4" },
                      { title: "5", value: "5" },
                      { title: "6", value: "6" },
                      { title: "7", value: "7" },
                      { title: "8", value: "8" },
                      { title: "9", value: "9" },
                      { title: "10", value: "10" },
                    ]}
                    error={errors.group_size?.message}
                    {...reg("group_size")}
                  />
                </div>
                <div>
                  <p className="md:text-xs text-[9px] italic text-accent mb-4">
                    Please review your registration details before submitting
                  </p>
                  <div className="flex items-center gap-x-2 mb-5">
                    <input
                      type="checkbox"
                      name=""
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                      className={`bg-bg ${
                        checked ? "" : "appearance-none"
                      } min-w-[14px] min-h-[14px] accent-accent checked:bg-white border-[1px] rounded-[2px]`}
                    />
                    <p className="md:text-xs text-[10px]">
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="md:w-full w-[172px]">
                    <Button onClick={handleSubmit(submit)} loading={loading}>
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div
        className={`fixed top-0 left-0 w-full items-center justify-center text-white flex flex-col px-10 bg-primary bg-opacity-90 z-[9948873789773] transform transition-all duration-300 ${
          success ? "opacity-100 h-screen" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="bg-white md:px-16 px-9 bg-opacity-[0.01] pt-5 border-[1px] border-accent rounded-[5px] md:min-w-[700px] md:pt-8">
          <div>
            <img src={congrats} alt="congratulations" className="mx-auto" />
          </div>
          <div className="md:text-[32px] font-semibold text-center md:my-4 md:max-w-[553px] text-base mt-6 mb-7 leading-[125%]">
            Congratulations <br /> you have successfully Registered!
          </div>
          <div className="text-center text-white md:max-w-[240px] md:text-sm mx-auto md:mb-9 text-xs mb-6">
            Yes, it was easy and you did it! check your mail box for next step
          </div>
          <div className="md:mb-[72px] mb-7">
            <Button onClick={() => setSuccess(false)}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
