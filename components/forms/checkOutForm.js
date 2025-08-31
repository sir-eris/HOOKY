import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";
import { useCart } from "../../contexts/CartContext";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

function AddressAutocomplete({ onSelect, ...props }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" }, // Optional
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const components = place.address_components;
      const getComponent = (type) =>
        components.find((c) => c.types.includes(type))?.short_name || "";
      const city =
        getComponent("locality") ||
        getComponent("sublocality") ||
        getComponent("postal_town");
      const state = getComponent("administrative_area_level_1");
      const zip = getComponent("postal_code");
      const country = getComponent("country");
      const streetAddress =
        getComponent("street_number") + " " + getComponent("route");

      if (components && place.formatted_address) {
        onSelect({ streetAddress, city, state, zip, country });
      }
    });
  }, []);

  return <input ref={inputRef} {...props} placeholder="" />;
}

export default function CheckOutForm() {
  const { cart } = useCart();
  const checkout = useCheckout();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formFields, setFormFields] = useState({
    billingFName: "",
    billingLName: "",
    billingLine1: "",
    billingLine2: "",
    billingPostCode: "",
    billingCity: "",
    billingState: "",
    billingCountry: "",
    memberId: "",
    licenseNumber: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    shippingLine1: "",
    shippingLine2: "",
    shippingPostCode: "",
    shippingCity: "",
    shippingState: "",
    shippingCountry: "",
  });
  const [formFieldsErrors, setFormFieldsErrors] = useState({
    billingFName: "",
    billingLName: "",
    billingLine1: "",
    billingLine2: "",
    billingPostCode: "",
    billingCity: "",
    billingState: "",
    memberId: "",
    licenseNumber: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    shippingLine1: "",
    shippingLine2: "",
    shippingCity: "",
    shippingPostCode: "",
    shippingState: "",
  });
  // [hasPromoCode, promoCode, hasPromoCodeError, promoCodeError]
  const [promoCode, setPromoCode] = useState([false, "", false, ""]);
  const [billingMatchShipping, setBillingMatchShipping] = useState(true);
  const [selectedName, setSelectedName] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState([]);
  const papers = [
    {
      name: "Brown",
      color: "bg-[#B08968]",
    },
    {
      name: "White",
      color: "bg-[#F8F9FA]",
    },
    {
      name: "Cherry",
      color: "bg-[#780000]",
    },
    {
      name: "Navy",
      color: "bg-[#03045E]",
    },
  ];
  const [selectedRibbon, setSelectedRibbon] = useState([]);
  const ribbons = [
    {
      name: "Gold",
      color: "bg-[#EDC531]",
    },
    {
      name: "Silver",
      color: "bg-[#C0C0C0]",
    },
    {
      name: "White",
      color: "bg-[#F8F9FA]",
    },
  ];
  const [selectedOccasion, setSelectedOccasion] = useState([]);
  const occasions = [null, "Holiday", "Romance", "Birthday"];
  const [gifts, setGifts] = useState([]);
  const [selectedGift, setSelectedGift] = useState([]);
  const [animating, setAnimating] = useState(false);

  const handleNext = (id) => {
    if (animating) return;
    setAnimating(true);
    setSelectedGift((prev) =>
      prev.map((item) =>
        item[0] === id
          ? [item[0], item[1] == 0 ? item[2].length - 1 : item[1] - 1, item[2]]
          : item
      )
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const handlePrev = (id) => {
    if (animating) return;
    setAnimating(true);
    setSelectedGift((prev) =>
      prev.map((item) =>
        item[0] === id
          ? [item[0], item[1] === item[2].length - 1 ? 0 : item[1] + 1, item[2]]
          : item
      )
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const handleAddGift = (id, index) => {
    const items = [...selectedGift];
    let item = items.filter((i, _) => i[0] == id)[0];
    item[2][index] = !item[2][index];
    setSelectedGift(() => items);
    if (
      selectedName
        .filter((item, _) => item[0] == id)
        .filter((item, _) => item[1] == index).length == 0
    ) {
      setSelectedName((prev) => [...prev, [id, index, ""]]);
    }
  };

  const selectPaper = (id, index, giftIndex) => {
    setSelectedPaper((prev) =>
      [...prev].map((item, _) =>
        item[0] == id && item[1] == giftIndex ? [id, giftIndex, index] : item
      )
    );
  };

  const selectRibbon = (id, index, giftIndex) => {
    setSelectedRibbon((prev) =>
      [...prev].map((item, _) =>
        item[0] == id && item[1] == giftIndex ? [id, giftIndex, index] : item
      )
    );
  };

  const selectOccasion = (e, id, giftIndex) => {
    e.preventDefault();
    setSelectedOccasion((prev) =>
      [...prev].map((item, _) =>
        item[0] == id && item[1] == giftIndex
          ? [id, giftIndex, Number(e.target.value)]
          : item
      )
    );
  };

  const onGiftNameChange = (e, id, giftIndex) => {
    e.preventDefault();
    setSelectedName((prev) => {
      return [...prev].map((item, _) =>
        item[0] == id && item[1] == giftIndex
          ? [id, giftIndex, e.target.value]
          : item
      );
    });
    // setOrderIdError("");
    // setSubmitError("");
  };

  const toggleIsGift = (id, length) => {
    if (gifts.includes(id)) {
      setGifts((prev) => [...prev].filter((i, _) => i != id));
    } else {
      // [id, activeIndex, [isGift]]
      setSelectedGift((prev) => {
        return [...prev, [id, 0, [true, ...Array(length - 1).fill(false)]]];
      });
      // [id, giftIndex, paperIndex]
      setSelectedPaper((prev) => {
        if (prev.filter((item, _) => item[0] == id).length == 0) {
          let items = [];
          for (let i = 0; i < length; i++) {
            items.push([id, i, 0]);
          }
          return [...prev, ...items];
        } else {
          return [...prev];
        }
      });
      // [id, giftIndex, paperIndex]
      setSelectedRibbon((prev) => {
        if (prev.filter((item, _) => item[0] == id).length == 0) {
          let items = [];
          for (let i = 0; i < length; i++) {
            items.push([id, i, 0]);
          }
          return [...prev, ...items];
        } else {
          return [...prev];
        }
      });
      // [id, giftIndex, selectedName]
      setSelectedName((prev) => {
        if (prev.filter((item, _) => item[0] == id).length == 0) {
          let items = [];
          for (let i = 0; i < length; i++) {
            items.push([id, i, ""]);
          }
          return [...prev, ...items];
        } else {
          return [...prev];
        }
      });
      // [id, giftIndex, occasionIndex]
      setSelectedOccasion((prev) => {
        if (prev.filter((item, _) => item[0] == id).length == 0) {
          let items = [];
          for (let i = 0; i < length; i++) {
            items.push([id, i, 0]);
          }
          return [...prev, ...items];
        } else {
          return [...prev];
        }
      });
      setGifts((prev) => [...prev, id]);
    }
  };

  const handlePromoCode = (e) => {
    e.preventDefault();
    setPromoCode([false, e.target.value.toUpperCase().trim(), false, ""]);
  };

  const handleApplyPromoCode = async (e) => {
    e.preventDefault();
    if (promoCode[0]) {
      await checkout.removePromotionCode();
      setPromoCode([false, "", false, ""]);
    } else {
      let pm = promoCode[1];
      if (pm.length < 1) {
        setPromoCode([false, pm, true, "Please enter a valid promo code"]);
        return;
      }
      const data = await checkout.applyPromotionCode(promoCode[1]);
      if (data.type == "success") {
        setPromoCode([true, promoCode[1], false, ""]);
      } else if (data.type == "error") {
        setPromoCode([false, promoCode[1], true, data.error.message]);
      }
    }
  };

  const toggleBillingMatchShipping = () => {
    setBillingMatchShipping((prev) => !prev);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormFields((prev) => {
      prev[e.target.name] = e.target.value;
      return { ...prev };
    });
    setFormFieldsErrors((prev) => {
      prev[e.target.name] = "";
      if (e.target.name == "shippingLine1") {
        prev["shippingCity"] = "";
        prev["shippingPostCode"] = "";
        prev["shippingState"] = "";
      }
      return { ...prev };
    });
  };

  const handleAutoAddress = (type, val) => {
    if (type == "shipping") {
      setFormFields((prev) => {
        prev["shippingLine1"] = val.streetAddress;
        prev["shippingPostCode"] = val.zip;
        prev["shippingCity"] = val.city;
        prev["shippingState"] = val.state;
        prev["shippingCountry"] = val.country;

        if (billingMatchShipping) {
          prev["billingLine1"] = val.streetAddress;
          prev["billingPostCode"] = val.zip;
          prev["billingCity"] = val.city;
          prev["billingState"] = val.state;
          prev["billingCountry"] = val.country;
        }
        return { ...prev };
      });
    } else if (type == "billing") {
      setFormFields((prev) => {
        prev["billingLine1"] = val.streetAddress;
        prev["billingPostCode"] = val.zip;
        prev["billingCity"] = val.city;
        prev["billingState"] = val.state;
        prev["billingCountry"] = val.country;
        return { ...prev };
      });
    }
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|io|info|co|us|uk|ca|in)$/;
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{4}$/;
    let fn = formFields["fName"].replace(/\s+/g, "");
    let ln = formFields["lName"].replace(/\s+/g, "");
    let em = formFields["email"].replace(/\s+/g, "");
    let ph = formFields["phone"].replace(/\s+/g, "");
    let hasError = false;

    if (cart.items.filter((item, _) => item.title == "PRO").length) {
      const memberIDRegex = /^[a-zA-Z0-9]{7}$/;
      let mi = formFields["memberId"].replace(/\s+/g, "");

      if (mi.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["memberId"] = "Please enter your Member ID";
          return { ...prev };
        });
        hasError = true;
      } else if (!memberIDRegex.test(mi)) {
        setFormFieldsErrors((prev) => {
          prev["memberId"] = "Please enter a valid Member ID";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["memberId"] = "";
          return { ...prev };
        });
      }

      const licenseRegex = /^[A-Z0-9\-\/]{5,20}$/i;
      let li = formFields["licenseNumber"].replace(/\s+/g, "");

      if (li.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["licenseNumber"] = "Please enter your license number";
          return { ...prev };
        });
        hasError = true;
      } else if (!licenseRegex.test(li)) {
        setFormFieldsErrors((prev) => {
          prev["licenseNumber"] = "Please enter a valid license number";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["licenseNumber"] = "";
          return { ...prev };
        });
      }
    }

    if (fn.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["fName"] = "Please enter your name";
        return { ...prev };
      });
      hasError = true;
    } else if (!/^[a-zA-Z\s\-]+$/.test(fn) || typeof fn !== "string") {
      setFormFieldsErrors((prev) => {
        prev["fName"] = "Please enter a valid name";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["fName"] = "";
        return { ...prev };
      });
    }

    if (ln.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["lName"] = "Please enter your name";
        return { ...prev };
      });
      hasError = true;
    } else if (!/^[a-zA-Z\s\-]+$/.test(ln) || typeof ln !== "string") {
      setFormFieldsErrors((prev) => {
        prev["lName"] = "Please enter a valid name";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["lName"] = "";
        return { ...prev };
      });
    }

    if (em.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["email"] = "Please enter your email address";
        return { ...prev };
      });
      hasError = true;
    } else if (!emailRegex.test(em)) {
      setFormFieldsErrors((prev) => {
        prev["email"] = "Please enter a valid email address";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["email"] = "";
        return { ...prev };
      });
    }

    if (ph.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["phone"] = "Please enter your phone number";
        return { ...prev };
      });
      hasError = true;
    } else if (!phoneRegex.test(ph)) {
      setFormFieldsErrors((prev) => {
        prev["phone"] = "Please enter a valid phone number";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["phone"] = "";
        return { ...prev };
      });
    }

    let ln1 = formFields["shippingLine1"].replace(/\s+/g, "");
    let ln2 = formFields["shippingLine2"].replace(/\s+/g, "");
    let cty = formFields["shippingCity"].replace(/\s+/g, "");
    let stt = formFields["shippingState"].replace(/\s+/g, "");
    let ps = formFields["shippingPostCode"].replace(/\s+/g, "");

    if (ln1.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["shippingLine1"] = "Please enter your street address";
        return { ...prev };
      });
      hasError = true;
    } else if (
      typeof ln1 !== "string" ||
      !/[a-zA-Z0-9]/.test(ln1) ||
      !/^[a-zA-Z0-9\s.,#-]+$/.test(ln1)
    ) {
      setFormFieldsErrors((prev) => {
        prev["shippingLine1"] = "Please enter a valid address";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["shippingLine1"] = "";
        return { ...prev };
      });
    }

    if (
      ln2.length > 0 &&
      (typeof ln2 !== "string" ||
        !/[a-zA-Z0-9]/.test(ln2) ||
        !/^[a-zA-Z0-9\s.,#-]+$/.test(ln2))
    ) {
      setFormFieldsErrors((prev) => {
        prev["shippingLine2"] = "Please enter a valid address";
        return { ...prev };
      });
      hasError = true;
    }

    if (cty.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["shippingCity"] = "Please enter your City";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["shippingCity"] = "";
        return { ...prev };
      });
    }

    if (stt.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["shippingState"] = "Please enter your State";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["shippingState"] = "";
        return { ...prev };
      });
    }
    

    if (ps.length < 1) {
      setFormFieldsErrors((prev) => {
        prev["shippingPostCode"] = "Please enter your post code";
        return { ...prev };
      });
      hasError = true;
    } else if (
      (!/^\d{5}(-\d{4})?$/.test(ps) && !/^[A-Z0-9\s\-]+$/.test(ps)) ||
      typeof ps !== "string"
    ) {
      setFormFieldsErrors((prev) => {
        prev["shippingPostCode"] = "Please enter a valid postal code";
        return { ...prev };
      });
      hasError = true;
    } else {
      setFormFieldsErrors((prev) => {
        prev["shippingPostCode"] = "";
        return { ...prev };
      });
    }

    if (!billingMatchShipping) {
      let bfn = formFields["billingFName"].replace(/\s+/g, "");
      let bln = formFields["billingLName"].replace(/\s+/g, "");
      let bln1 = formFields["billingLine1"].replace(/\s+/g, "");
      let bln2 = formFields["billingLine2"].replace(/\s+/g, "");
      let bps = formFields["billingPostCode"].replace(/\s+/g, "");

      if (bfn.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["billingFName"] = "Please enter your name";
          return { ...prev };
        });
        hasError = true;
      } else if (!/^[a-zA-Z\s\-]+$/.test(bfn) || typeof bfn !== "string") {
        setFormFieldsErrors((prev) => {
          prev["billingFName"] = "Please enter a valid name";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["billingFName"] = "";
          return { ...prev };
        });
      }

      if (bln.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["billingLName"] = "Please enter your name";
          return { ...prev };
        });
        hasError = true;
      } else if (!/^[a-zA-Z\s\-]+$/.test(bln) || typeof bln !== "string") {
        setFormFieldsErrors((prev) => {
          prev["billingLName"] = "Please enter a valid name";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["billingLName"] = "";
          return { ...prev };
        });
      }

      if (bln1.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["billingLine1"] = "Please enter your street address";
          return { ...prev };
        });
        hasError = true;
      } else if (
        typeof bln1 !== "string" ||
        !/[a-zA-Z0-9]/.test(bln1) ||
        !/^[a-zA-Z0-9\s.,#-]+$/.test(ln2)
      ) {
        setFormFieldsErrors((prev) => {
          prev["billingLine1"] = "Please enter a valid address";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["billingLine1"] = "";
          return { ...prev };
        });
      }

      if (
        bln2.length > 0 &&
        (typeof bln2 !== "string" ||
          !/[a-zA-Z0-9]/.test(bln2) ||
          !/^[a-zA-Z0-9\s.,#-]+$/.test(bln2))
      ) {
        setFormFieldsErrors((prev) => {
          prev["billingLine2"] = "Please enter a valid address";
          return { ...prev };
        });
        hasError = true;
      }

      if (bps.length < 1) {
        setFormFieldsErrors((prev) => {
          prev["billingPostCode"] = "Please enter your post code";
          return { ...prev };
        });
        hasError = true;
      } else if (
        (!/^\d{5}(-\d{4})?$/.test(bps) && !/^[A-Z0-9\s\-]+$/.test(bps)) ||
        typeof bps !== "string"
      ) {
        setFormFieldsErrors((prev) => {
          prev["billingPostCode"] = "Please enter a valid postal code";
          return { ...prev };
        });
        hasError = true;
      } else {
        setFormFieldsErrors((prev) => {
          prev["billingPostCode"] = "";
          return { ...prev };
        });
      }
    }

    if (hasError) {
      setError({ message: "Please check your inputs and retry." });
      setTimeout(() => {
        setError(null);
      }, 3000);
      setLoading(false);
      return;
    }

    let giftsData = [];
    for (let i = 0; i < selectedGift.length; i++) {
      let count = [];
      const id = selectedGift[i][0];
      if (gifts.includes(id)) {
        const papers = selectedPaper.filter((item, _) => item[0] == id);
        const ribbons = selectedRibbon.filter((item, _) => item[0] == id);
        const names = selectedName.filter((item, _) => item[0] == id);
        const occasions = selectedOccasion.filter((item, _) => item[0] == id);

        for (let j = 0; j < selectedGift[i][2].length; j++) {
          let name, ribbon, paper, occasion;
          if (selectedGift[i][2][j] == true) {
            paper = papers.filter((item) => item[1] == j)[0][2];
            ribbon = ribbons.filter((item) => item[1] == j)[0][2];
            name = names.filter((item) => item[1] == j)[0][2];
            occasion = occasions.filter((item) => item[1] == j)[0][2];
            count.push({ paper, ribbon, name, occasion });
          }
        }
        giftsData.push({ itemId: id, count });
      }
    }

    const shippingAddress = await checkout.updateShippingAddress({
      name: formFields["fName"] + " " + formFields["lName"],
      address: {
        line1: formFields["shippingLine1"],
        line2: formFields["shippingLine2"],
        city: formFields["shippingCity"],
        state: formFields["shippingState"],
        postal_code: formFields["shippingPostCode"],
        country: formFields["shippingCountry"],
      },
    });
    const billingAddress = await checkout.updateBillingAddress({
      address: {
        line1: billingMatchShipping
          ? formFields["shippingLine1"]
          : formFields["billingLine1"],
        line2: billingMatchShipping
          ? formFields["shippingLine2"]
          : formFields["billingLine2"],
        city: billingMatchShipping
          ? formFields["shippingCity"]
          : formFields["billingCity"],
        state: billingMatchShipping
          ? formFields["shippingState"]
          : formFields["billingState"],
        postal_code: billingMatchShipping
          ? formFields["shippingPostCode"]
          : formFields["billingPostCode"],
        country: billingMatchShipping
          ? formFields["shippingCountry"]
          : formFields["billingCountry"],
      },
    });
    // TODO: verify businesses for PRO orders

    if (shippingAddress.type == "success" && billingAddress.type == "success") {
      sessionStorage.setItem("allowed", "true");
      const res = await checkout
        .confirm({
          returnUrl: "http://localhost:3000/order/thank-you",
          email: formFields["email"],
          phoneNumber: formFields["phone"],
        })
        .then((result) => {
          if (result.type === "success") { 
            console.log("HE");
          } else if (result.type === "error") {
            console.log("HI");
            sessionStorage.removeItem("allowed");
            setError(result.error);
            setTimeout(() => {
              setError(null);
            }, 3000);
          }
        }).catch(async (err) => {
          sessionStorage.removeItem("allowed");
          console.log("HO");
          // const error = JSON.parse(JSON.stringify(err));
          // console.log(error);
          // setError( "Please check your information and try again.");
          // setTimeout(() => {
          //   setError(null);
          // }, 3000);
        })
      } else {
      console.log("HA");
      setError("Please check your shipping and billing address.");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div>
      {error && (
        <div className="notification warning">
          <p>{error.message}</p>
        </div>
      )}

      {/* <p>
        {JSON.stringify(checkout.lineItems, null, 2)}
        Currency: {checkout.currency}
        {checkout.total.total.amount}
      </p> */}

      {cart.items.filter((item, _) => item.title == "PRO").length > 0 && (
        <>
          <div className="w-full flex justify-start items-center gap-x-6 mb-6">
            <div className="w-1/2">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  PRO Member ID
                </p>
                <small className="text-xs text-red-500">
                  {formFieldsErrors["memberId"]}
                </small>
              </div>
              <input
                type="text"
                onChange={(e) => handleInputChange(e)}
                name={"memberId"}
                value={formFields["memberId"]}
                className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                  formFieldsErrors["memberId"].length > 0
                    ? "border-red-500"
                    : "border-white"
                }`}
                placeholder=""
              />
            </div>
            <div className="w-1/2">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  Business License Number
                </p>
                <small className="text-xs text-red-500">
                  {formFieldsErrors["licenseNumber"]}
                </small>
              </div>
              <input
                type="text"
                onChange={(e) => handleInputChange(e)}
                name={"licenseNumber"}
                value={formFields["licenseNumber"]}
                className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                  formFieldsErrors["licenseNumber"].length > 0
                    ? "border-red-500"
                    : "border-white"
                }`}
                placeholder=""
              />
            </div>
          </div>
          <hr className="w-full mb-6" />
        </>
      )}

      <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-x-6 mb-6">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              First Name
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["fName"]}
            </small>
          </div>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"fName"}
            id="first_name"
            value={formFields["fName"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["fName"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Last Name
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["lName"]}
            </small>
          </div>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"lName"}
            id="last_name"
            value={formFields["lName"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["lName"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-x-6 mb-6">
        <div className="w-full lg:w-3/5 mb-6 lg:mb-0">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Email Address
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["email"]}
            </small>
          </div>
          <input
            type="email"
            onChange={(e) => handleInputChange(e)}
            name={"email"}
            id="email"
            value={formFields["email"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["email"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div>
        <div className="w-full lg:w-2/5">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Phone Number
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["phone"]}
            </small>
          </div>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"phone"}
            id="phone"
            value={formFields["phone"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["phone"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-x-6 mb-6">
        <div className="w-full lg:w-3/5 mb-6 lg:mb-0">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Shipping Address
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["shippingLine1"] ||
                formFieldsErrors["shippingCity"] ||
                formFieldsErrors["shippingPostCode"] ||
                formFieldsErrors["shippingState"]}
            </small>
          </div>
          <AddressAutocomplete
            onSelect={(val) => handleAutoAddress("shipping", val)}
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"shippingLine1"}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["shippingLine1"].length > 0 ||
              formFieldsErrors["shippingCity"].length > 0 ||
              formFieldsErrors["shippingPostCode"].length > 0 ||
              formFieldsErrors["shippingState"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Unit/Apt
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["shippingLine2"]}
            </small>
          </div>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"shippingLine2"}
            value={formFields["shippingLine2"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["shippingLine2"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div>
        {/* <div className="w-1/2">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Zip Code
            </p>
            <small className="text-xs text-red-500">
              {formFieldsErrors["shippingPostCode"]}
            </small>
          </div>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name={"shippingPostCode"}
            value={formFields["shippingPostCode"]}
            className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
              formFieldsErrors["shippingPostCode"].length > 0
                ? "border-red-500"
                : "border-white"
            }`}
            placeholder=""
          />
        </div> */}
      </div>

      <hr className="w-full mb-6" />

      <form className="mb-6">
        <PaymentElement options={{ layout: "accordion" }} />
      </form>

      <hr className="w-full mb-6" />

      <div className="w-full mb-6">
        <form
          onSubmit={(e) => handleApplyPromoCode(e)}
          className="w-full h-14 flex justify-between items-center"
        >
          <div className="w-2/3 lg:w-1/2 flex items-center justify-center">
            {!promoCode[0] ? (
              <div className="relative w-full h-full">
                <input
                  type="text"
                  onChange={(e) => handlePromoCode(e)}
                  value={promoCode[1]}
                  className={`rounded-xl border-2 ${
                    promoCode[2] ? `border-red-400` : `border-white`
                  } bg-white px-2 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm text-center placeholder:text-xs focus:border-[#89FC00]`}
                  placeholder="PROMO CODE"
                />
                <small className="absolute w-full mt-1 block text-xs text-center text-red-500">
                  {promoCode[3]}
                </small>
              </div>
            ) : (
              <div className="flex justify-start items-center w-full h-16">
                <p className="text-gray-700 text-sm font-semibold">
                  <i>{promoCode[1]}</i> applied {checkout.total.discount.amount}{" "}
                  off.
                </p>
              </div>
            )}
          </div>
          <div className="w-1/3 flex justify-end items-center text-right text-gray-700">
            <button
              onClick={handleApplyPromoCode}
              className="text-[#70e000] underline underline-offset-4 hover:no-underline text-sm"
            >
              {!promoCode[0] ? "Apply Code" : "Remove Code"}
            </button>
          </div>
        </form>
      </div>

      <hr className="w-full mb-6" />

      <div className="w-full mb-6  transition-all">
        <button onClick={toggleBillingMatchShipping} className="w-full">
          <div className="w-full flex justify-between items-end py-4">
            <div className="flex gap-x-2">
              <span
                className={`flex justify-center items-center w-4 h-4 mt-[2px] rounded border border-gray-400 ${
                  billingMatchShipping ? `bg-[#70e000]` : `bg-white`
                }`}
              >
                <Check
                  color="#ffffff"
                  size={12}
                  strokeWidth={3}
                  className="p-0 m-0"
                />
              </span>
              <p className="text-sm font-bold text-gray-700">
                Match Billing with Shipping Address
              </p>
            </div>
            {/* {!billingMatchShipping ? null : (
              <p className="text-xs">
                <i className="font-medium">Same as shipping address</i>
              </p>
            )} */}
          </div>
        </button>
        {!billingMatchShipping ? (
          <>
            {/* <hr className="block w-full mb-4" /> */}
            {/* <div className="w-full flex justify-start items-center gap-x-6 mb-8">
              <div className="w-1/2">
                <div className="flex justify-between items-end mb-4">
                  <p className="text-left font-medium text-gray-600 text-xs">
                    First Name
                  </p>
                  <small className="text-xs text-red-500">
                    {formFieldsErrors["billingFName"]}
                  </small>
                </div>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  name={"billingFName"}
                  value={formFields["billingFName"]}
                  className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                    formFieldsErrors["billingFName"].length > 0
                      ? "border-red-500"
                      : "border-white"
                  }`}
                  placeholder=""
                />
              </div>
              <div className="w-1/2">
                <div className="flex justify-between items-end mb-4">
                  <p className="text-left font-medium text-gray-600 text-xs">
                    Last Name
                  </p>
                  <small className="text-xs text-red-500">
                    {formFieldsErrors["billingLName"]}
                  </small>
                </div>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  name={"billingLName"}
                  value={formFields["billingLName"]}
                  className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                    formFieldsErrors["billingLName"].length > 0
                      ? "border-red-500"
                      : "border-white"
                  }`}
                  placeholder=""
                />
              </div>
            </div> */}
            <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-x-6 my-6">
              <div className="w-full lg:w-4/5 mb-6 lg:mb-0">
                <div className="flex justify-between items-end mb-4">
                  <p className="text-left font-medium text-gray-600 text-xs">
                    Billing Address
                  </p>
                  <small className="text-xs text-red-500">
                    {formFieldsErrors["billingLine1"]}
                  </small>
                </div>
                <AddressAutocomplete
                  onSelect={(val) => handleAutoAddress("billing", val)}
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  name={"billingLine1"}
                  className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                    formFieldsErrors["billingLine1"].length > 0
                      ? "border-red-500"
                      : "border-white"
                  }`}
                />
              </div>

              <div className="w-full lg:w-1/5">
                <div className="flex justify-between items-end mb-4">
                  <p className="text-left font-medium text-gray-600 text-xs">
                    Unit/Apt
                  </p>
                  <small className="text-xs text-red-500">
                    {formFieldsErrors["billingLine2"]}
                  </small>
                </div>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e)}
                  name={"billingLine2"}
                  value={formFields["billingLine2"]}
                  className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                    formFieldsErrors["billingLine2"].length > 0
                      ? "border-red-500"
                      : "border-white"
                  }`}
                  placeholder=""
                />
              </div>
            </div>
          </>
        ) : null}
      </div>

      <hr className="w-full mb-6" />

      <div className="w-full mb-6 pb-6 border-b">
        <div className="w-full mb-24">
          <div className="">
            <small className="block mb-3">Summary:</small>
          </div>

          {/* GIFT */}
          {cart.quick != null ? (
            <>
              <div
                key={cart.quick.id}
                className="px-2 flex justify-between items-start"
              >
                <span className="inline-block w-[7%] text-xs lg:text-sm">
                  {cart.quick.count}x
                </span>
                <div className="inline-block w-[71%] text-left text-xs lg:text-sm">
                  <p className="">
                    {cart.quick.title}
                    {cart.quick.model ? " in " + cart.quick.model : null}
                  </p>
                  {cart.quick.checkOutOptions.length > 0
                    ? cart.quick.checkOutOptions.map((option, _) => (
                        <span key={_} className="block text-gray-500">
                          {option.title}
                        </span>
                      ))
                    : null}
                </div>
                <div className="inline-block w-[22%] text-xs lg:text-sm text-right">
                  <p className="">{cart.quick.price}</p>
                  {cart.quick.checkOutOptions.length > 0
                    ? cart.quick.checkOutOptions.map((option, _) => (
                        <p key={_} className="text-gray-500">
                          {option.price}
                        </p>
                      ))
                    : null}
                </div>
              </div>

              {cart.quick.type == "device" && cart.quick.title != "PRO" ? (
                <div className="flex w-full px-2">
                  <div className="w-[7%] h-full">
                    <button
                      onClick={() => toggleIsGift(cart.quick.id, cart.quick.count)}
                      className="text-xs flex gap-x-2 mt-[5px]"
                    >
                      <span
                        className={`flex justify-center items-center w-4 h-4 rounded border border-gray-400 ${
                          gifts.includes(cart.quick.id) ? `bg-[#70e000]` : `bg-white`
                        }`}
                      >
                        <Check
                          color="#ffffff"
                          size={12}
                          strokeWidth={3}
                          className="p-0 m-0"
                        />
                      </span>
                    </button>
                  </div>
                  <div className="w-[71%] mb-2">
                    <button
                      onClick={() => toggleIsGift(cart.quick.id, cart.quick.count)}
                      className="text-[#70e000] font-semibold text-xs underline underline-offset-2 hover:no-underline"
                    >
                      Gift Prep
                    </button>
                  </div>
                  <div className="inline-block w-[22%] text-xs lg:text-sm text-right">
                    <p className="text-gray-500">
                      {gifts.includes(cart.quick.id)
                        ? selectedGift
                            .filter((i, _) => i[0] == cart.quick.id)[0][2]
                            .filter((i, _) => i == true).length + " x $12.00"
                        : ""}
                    </p>
                  </div>
                </div>
              ) : (
                <span className="block mb-2"></span>
              )}

              {gifts.includes(cart.quick.id) && (
                <div className="relative w-full  items-center justify-center">
                  <div className="w-full flex items-center justify-center overflow-hidden rounded-lg relative">
                    <div
                      className="w-full h-full flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${
                          selectedGift.filter(
                            (index, _) => index[0] == cart.quick.id
                          )[0][1] * 100
                        }%)`,
                      }}
                    >
                      {[...Array(cart.quick.count)].map((_, index) => (
                        <div
                          key={cart.quick.id + index}
                          className="w-full h-full flex-shrink-0 p-1"
                        >
                          <div
                            className={`relative w-full bg-gray-50 p-4 mb-2 rounded-xl border-2 border-white outline outline-[1px] outline-gray-300 hover:border-gray-300 transition-all`}
                          >
                            <div
                              className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:divide-x lg:mb-6 ${
                                selectedGift.filter(
                                  (i, _) => i[0] == cart.quick.id
                                )[0][2][index] == true
                                  ? ``
                                  : `opacity-55`
                              }`}
                            >
                              <div className="mb-6 lg:mb-0 lg:pr-8">
                                <p className="text-xs font-semibold mb-4">
                                  Select wrapping paper color:
                                </p>
                                <div className="flex justify-around">
                                  {papers.map((paper, i) => (
                                    <button
                                      key={paper.name + i}
                                      className="w-auto h-auto text-xs text-center lg:hover:opacity-75"
                                      onClick={() =>
                                        selectPaper(cart.quick.id, i, index)
                                      }
                                      disabled={
                                        !selectedGift.filter(
                                          (g, _) => g[0] == cart.quick.id
                                        )[0][2][index] == true
                                      }
                                    >
                                      <div
                                        className={`w-10 h-10 mx-auto border-2 rounded-full mb-2 ${
                                          paper.color
                                        } ${
                                          i ==
                                          selectedPaper.filter(
                                            (p, _) =>
                                              p[0] == cart.quick.id && p[1] == index
                                          )[0][2]
                                            ? `outline outline-[2px] outline-offset-2 outline-[#70E000]`
                                            : ""
                                        }`}
                                      ></div>
                                      <p>{paper.name}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="mb-6 lg:mb-0 lg:pl-8">
                                <p className="text-xs font-semibold mb-4">
                                  Select ribbon color:
                                </p>
                                <div className="flex justify-around">
                                  {ribbons.map((ribbon, i) => (
                                    <button
                                      key={ribbon.name + i}
                                      className="w-auto h-auto text-xs text-center lg:hover:opacity-75"
                                      onClick={() =>
                                        selectRibbon(cart.quick.id, i, index)
                                      }
                                      disabled={
                                        !selectedGift.filter(
                                          (i, _) => i[0] == cart.quick.id
                                        )[0][2][index] == true
                                      }
                                    >
                                      <div
                                        className={`w-10 h-10 mx-auto border-2 rounded-full mb-2 ${
                                          ribbon.color
                                        } ${
                                          i ==
                                          selectedRibbon.filter(
                                            (r, _) =>
                                              r[0] == cart.quick.id && r[1] == index
                                          )[0][2]
                                            ? `outline outline-[2px] outline-offset-2 outline-[#70E000]`
                                            : ""
                                        }`}
                                      ></div>
                                      <p>{ribbon.name}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:divide-x ${
                                selectedGift.filter(
                                  (i, _) => i[0] == cart.quick.id
                                )[0][2][index] == true
                                  ? ``
                                  : `opacity-55`
                              }`}
                            >
                              <div className={`w-full mb-4 lg:mb-0 lg:pr-6`}>
                                <p className="w-full text-left font-medium text-gray-600 text-xs mb-2">
                                  Made out to
                                </p>
                                <input
                                  type="text"
                                  name={cart.quick.id + "_" + index}
                                  onChange={(e) =>
                                    onGiftNameChange(e, cart.quick.id, index)
                                  }
                                  value={
                                    selectedName.filter(
                                      (s, _) => s[0] == cart.quick.id && s[1] == index
                                    )[0][2]
                                  }
                                  disabled={
                                    !selectedGift.filter(
                                      (i, _) => i[0] == cart.quick.id
                                    )[0][2][index] == true
                                  }
                                  placeholder="Full Name"
                                  className="rounded-xl border-2 border-white bg-white px-3 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                                />
                              </div>
                              <div className={`w-full lg:pl-6`}>
                                <p className="w-full text-left font-medium text-gray-600 text-xs mb-2">
                                  Occasion <i>(optional)</i>
                                </p>
                                <select
                                  name={"occasion_" + cart.quick.id + "_" + index}
                                  onChange={(e) =>
                                    selectOccasion(e, cart.quick.id, index)
                                  }
                                  defaultValue={0}
                                  disabled={
                                    !selectedGift.filter(
                                      (i, _) => i[0] == cart.quick.id
                                    )[0][2][index] == true
                                  }
                                  className="rounded-xl border-2 border-white bg-white px-3 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                                >
                                  {occasions.map((o, _) => (
                                    <option
                                      key={o + "_" + _}
                                      // selected={
                                      //   selectedOccasion.filter(
                                      //     (i, _) =>
                                      //       i[0] == cart.quick.id && i[1] == index
                                      //   )[0][2] == _
                                      // }
                                      value={_}
                                    >
                                      {o}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {cart.quick.count > 1 ? (
                    <div className="w-full mx-auto px-4 mb-4 flex justify-between">
                      <button
                        onClick={() => handlePrev(cart.quick.id)}
                        className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 shadow-sm hover:shadow-md outline outline-gray-300 rounded-full z-20 flex justify-center items-center transition-all"
                      >
                        <ChevronLeft className="mr-[2px]" />
                      </button>

                      <div className="flex gap-x-2 items-center">
                        <button
                          onClick={() =>
                            handleAddGift(
                              cart.quick.id,
                              selectedGift.filter(
                                (i, _) => i[0] == cart.quick.id
                              )[0][1]
                            )
                          }
                          className="text-xs flex gap-x-2"
                        >
                          <span
                            className={`flex justify-center items-center w-16 h-8 rounded-xl outline outline-2 border-gray-300 border-2 bg-white ${
                              selectedGift.filter(
                                (i, _) => i[0] == cart.quick.id
                              )[0][2][
                                selectedGift.filter(
                                  (j, _) => j[0] == cart.quick.id
                                )[0][1]
                              ] == true
                                ? `outline-[#70e000]`
                                : `outline-white`
                            }`}
                          >
                            {/* {selectedGift.filter(
                                    (i, _) => i[0] == cart.quick.id
                                  )[0][2][
                                    selectedGift.filter(
                                      (j, _) => j[0] == cart.quick.id
                                    )[0][1]
                                  ] == true && <Check
                                  color="#70e000"
                                  size={10}
                                  strokeWidth={3}
                                  className="p-0 m-0"
                                />} */}
                            {selectedGift.filter(
                              (i, _) => i[0] == cart.quick.id
                            )[0][1] + 1}{" "}
                            of {cart.quick.count}
                          </span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleNext(cart.quick.id)}
                        className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 shadow-sm hover:shadow-md outline outline-gray-300 rounded-full z-20 flex justify-center items-center transition-all"
                      >
                        <ChevronRight className="ml-[2px]" />
                      </button>
                    </div>
                  ) : null}
                </div>
              )}

              <hr className="mb-2" />
            </>
          ) : (
            cart.items.map((item) => (
              <>
                <div
                  key={item.id}
                  className="px-2 flex justify-between items-start"
                >
                  <span className="inline-block w-[7%] text-xs lg:text-sm">
                    {item.count}x
                  </span>
                  <div className="inline-block w-[71%] text-left text-xs lg:text-sm">
                    <p className="">
                      {item.title}
                      {item.model ? " in " + item.model : null}
                    </p>
                    {item.checkOutOptions.length > 0
                      ? item.checkOutOptions.map((option, _) => (
                          <span key={_} className="block text-gray-500">
                            {option.title}
                          </span>
                        ))
                      : null}
                  </div>
                  <div className="inline-block w-[22%] text-xs lg:text-sm text-right">
                    <p className="">{item.price}</p>
                    {item.checkOutOptions.length > 0
                      ? item.checkOutOptions.map((option, _) => (
                          <p key={_} className="text-gray-500">
                            {option.price}
                          </p>
                        ))
                      : null}
                  </div>
                </div>

                {item.type == "device" && item.title != "PRO" ? (
                  <div className="flex w-full px-2">
                    <div className="w-[7%] h-full">
                      <button
                        onClick={() => toggleIsGift(item.id, item.count)}
                        className="text-xs flex gap-x-2 mt-[5px]"
                      >
                        <span
                          className={`flex justify-center items-center w-4 h-4 rounded border border-gray-400 ${
                            gifts.includes(item.id)
                              ? `bg-[#70e000]`
                              : `bg-white`
                          }`}
                        >
                          <Check
                            color="#ffffff"
                            size={12}
                            strokeWidth={3}
                            className="p-0 m-0"
                          />
                        </span>
                      </button>
                    </div>
                    <div className="w-[71%] mb-2">
                      <button
                        onClick={() => toggleIsGift(item.id, item.count)}
                        className="text-[#70e000] font-semibold text-xs underline underline-offset-2 hover:no-underline"
                      >
                        Gift Prep
                      </button>
                    </div>
                    <div className="inline-block w-[22%] text-xs lg:text-sm text-right">
                      <p className="text-gray-500">
                        {gifts.includes(item.id)
                          ? selectedGift
                              .filter((i, _) => i[0] == item.id)[0][2]
                              .filter((i, _) => i == true).length + " x $12.00"
                          : ""}
                      </p>
                    </div>
                  </div>
                ) : (
                  <span className="block mb-2"></span>
                )}

                {gifts.includes(item.id) && (
                  <div className="relative w-full  items-center justify-center">
                    <div className="w-full flex items-center justify-center overflow-hidden rounded-lg relative">
                      <div
                        className="w-full h-full flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${
                            selectedGift.filter(
                              (index, _) => index[0] == item.id
                            )[0][1] * 100
                          }%)`,
                        }}
                      >
                        {[...Array(item.count)].map((_, index) => (
                          <div
                            key={item.id + index}
                            className="w-full h-full flex-shrink-0 p-1"
                          >
                            <div
                              className={`relative w-full bg-gray-50 p-4 mb-2 rounded-xl border-2 border-white outline outline-[1px] outline-gray-300 hover:border-gray-300 transition-all`}
                            >
                              <div
                                className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:divide-x lg:mb-6 ${
                                  selectedGift.filter(
                                    (i, _) => i[0] == item.id
                                  )[0][2][index] == true
                                    ? ``
                                    : `opacity-55`
                                }`}
                              >
                                <div className="mb-6 lg:mb-0 lg:pr-8">
                                  <p className="text-xs font-semibold mb-4">
                                    Select wrapping paper color:
                                  </p>
                                  <div className="flex justify-around">
                                    {papers.map((paper, i) => (
                                      <button
                                        key={paper.name + i}
                                        className="w-auto h-auto text-xs text-center lg:hover:opacity-75"
                                        onClick={() =>
                                          selectPaper(item.id, i, index)
                                        }
                                        disabled={
                                          !selectedGift.filter(
                                            (g, _) => g[0] == item.id
                                          )[0][2][index] == true
                                        }
                                      >
                                        <div
                                          className={`w-10 h-10 mx-auto border-2 rounded-full mb-2 ${
                                            paper.color
                                          } ${
                                            i ==
                                            selectedPaper.filter(
                                              (p, _) =>
                                                p[0] == item.id && p[1] == index
                                            )[0][2]
                                              ? `outline outline-[2px] outline-offset-2 outline-[#70E000]`
                                              : ""
                                          }`}
                                        ></div>
                                        <p>{paper.name}</p>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div className="mb-6 lg:mb-0 lg:pl-8">
                                  <p className="text-xs font-semibold mb-4">
                                    Select ribbon color:
                                  </p>
                                  <div className="flex justify-around">
                                    {ribbons.map((ribbon, i) => (
                                      <button
                                        key={ribbon.name + i}
                                        className="w-auto h-auto text-xs text-center lg:hover:opacity-75"
                                        onClick={() =>
                                          selectRibbon(item.id, i, index)
                                        }
                                        disabled={
                                          !selectedGift.filter(
                                            (i, _) => i[0] == item.id
                                          )[0][2][index] == true
                                        }
                                      >
                                        <div
                                          className={`w-10 h-10 mx-auto border-2 rounded-full mb-2 ${
                                            ribbon.color
                                          } ${
                                            i ==
                                            selectedRibbon.filter(
                                              (r, _) =>
                                                r[0] == item.id && r[1] == index
                                            )[0][2]
                                              ? `outline outline-[2px] outline-offset-2 outline-[#70E000]`
                                              : ""
                                          }`}
                                        ></div>
                                        <p>{ribbon.name}</p>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:divide-x ${
                                  selectedGift.filter(
                                    (i, _) => i[0] == item.id
                                  )[0][2][index] == true
                                    ? ``
                                    : `opacity-55`
                                }`}
                              >
                                <div className={`w-full mb-4 lg:mb-0 lg:pr-6`}>
                                  <p className="w-full text-left font-medium text-gray-600 text-xs mb-2">
                                    Made out to
                                  </p>
                                  <input
                                    type="text"
                                    name={item.id + "_" + index}
                                    onChange={(e) =>
                                      onGiftNameChange(e, item.id, index)
                                    }
                                    value={
                                      selectedName.filter(
                                        (s, _) =>
                                          s[0] == item.id && s[1] == index
                                      )[0][2]
                                    }
                                    disabled={
                                      !selectedGift.filter(
                                        (i, _) => i[0] == item.id
                                      )[0][2][index] == true
                                    }
                                    placeholder="Full Name"
                                    className="rounded-xl border-2 border-white bg-white px-3 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                                  />
                                </div>
                                <div className={`w-full lg:pl-6`}>
                                  <p className="w-full text-left font-medium text-gray-600 text-xs mb-2">
                                    Occasion <i>(optional)</i>
                                  </p>
                                  <select
                                    name={"occasion_" + item.id + "_" + index}
                                    onChange={(e) =>
                                      selectOccasion(e, item.id, index)
                                    }
                                    defaultValue={0}
                                    disabled={
                                      !selectedGift.filter(
                                        (i, _) => i[0] == item.id
                                      )[0][2][index] == true
                                    }
                                    className="rounded-xl border-2 border-white bg-white px-3 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                                  >
                                    {occasions.map((o, _) => (
                                      <option
                                        key={o + "_" + _}
                                        // selected={
                                        //   selectedOccasion.filter(
                                        //     (i, _) =>
                                        //       i[0] == item.id && i[1] == index
                                        //   )[0][2] == _
                                        // }
                                        value={_}
                                      >
                                        {o}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {item.count > 1 ? (
                      <div className="w-full mx-auto px-4 mb-4 flex justify-between">
                        <button
                          onClick={() => handlePrev(item.id)}
                          className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 shadow-sm hover:shadow-md outline outline-gray-300 rounded-full z-20 flex justify-center items-center transition-all"
                        >
                          <ChevronLeft className="mr-[2px]" />
                        </button>

                        <div className="flex gap-x-2 items-center">
                          <button
                            onClick={() =>
                              handleAddGift(
                                item.id,
                                selectedGift.filter(
                                  (i, _) => i[0] == item.id
                                )[0][1]
                              )
                            }
                            className="text-xs flex gap-x-2"
                          >
                            <span
                              className={`flex justify-center items-center w-16 h-8 rounded-xl outline outline-2 border-gray-300 border-2 bg-white ${
                                selectedGift.filter(
                                  (i, _) => i[0] == item.id
                                )[0][2][
                                  selectedGift.filter(
                                    (j, _) => j[0] == item.id
                                  )[0][1]
                                ] == true
                                  ? `outline-[#70e000]`
                                  : `outline-white`
                              }`}
                            >
                              {/* {selectedGift.filter(
                                    (i, _) => i[0] == item.id
                                  )[0][2][
                                    selectedGift.filter(
                                      (j, _) => j[0] == item.id
                                    )[0][1]
                                  ] == true && <Check
                                  color="#70e000"
                                  size={10}
                                  strokeWidth={3}
                                  className="p-0 m-0"
                                />} */}
                              {selectedGift.filter(
                                (i, _) => i[0] == item.id
                              )[0][1] + 1}{" "}
                              of {item.count}
                            </span>
                          </button>
                        </div>

                        <button
                          onClick={() => handleNext(item.id)}
                          className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 shadow-sm hover:shadow-md outline outline-gray-300 rounded-full z-20 flex justify-center items-center transition-all"
                        >
                          <ChevronRight className="ml-[2px]" />
                        </button>
                      </div>
                    ) : null}
                  </div>
                )}

                <hr className="mb-2" />
              </>
            ))
          )}

          <div className="flex justify-between items-end mt-12 lg:mt-6 text-xs lg:text-sm">
            <p>Subtotal</p>
            <p className="">{checkout.total.subtotal.amount}</p>
          </div>
          <div className="flex justify-between items-end text-xs lg:text-sm">
            <p>Discount</p>
            <p className="">({checkout.total.discount.amount})</p>
          </div>
          <div className="flex justify-between items-end text-xs lg:text-sm">
            <p>Tax</p>
            <p className="">
              <i>{checkout.total.taxExclusive.amount}</i>
            </p>
          </div>
          {/* <div className="flex justify-between items-end text-xs lg:text-sm">
            <p>Gift Prep</p>
            <p className="">
              <i>
                $
                {selectedGift
                  .map(
                    (item, _) =>
                      gifts.includes(item[0]) &&
                      item[2].filter((i, _) => i == true).length
                  )
                  .reduce((acc, num) => acc + num, 0) * 12}
                .00
              </i>
            </p>
          </div> */}
          <div className="flex justify-between items-end text-xs lg:text-sm">
            <p>Shipping</p>
            <p className="">
              <i>Included</i>
            </p>
          </div>
          <div className="flex justify-between items-end mb-1 text-xs lg:text-sm">
            <p>Total</p>
            <p className="">{checkout.total.total.amount}</p>
          </div>
        </div>
        
        <button
          disabled={loading}
          onClick={handleClick}
          className="block w-fit ml-auto text-right text-nowrap text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
        >
          {loading ? (
            <div className="spinner-box mt-4">
              <div className="pulse-container">
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
              </div>
            </div>
          ) : (
            "Place Order"
          )}
        </button>
      </div>

      <div className="w-full">
        <p className="block w-full font-medium text-gray-600 text-[10px] lg:text-xs text-opacity-65">
          By placing an order you accept the following{" "}
          <Link href="/terms" className="underline hover:no-underline">
            terms and policies
          </Link>
          . Delivery begins Summer 2025. Cancel your order any time. Included
          free shipping and free 30-day return. Gift content is subject to
          privacy and piracy laws.
        </p>
      </div>
    </div>
  );
}
