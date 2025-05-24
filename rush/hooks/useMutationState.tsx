import { useState } from "react";

import { mutation } from "@/convex/_generated/server";
import { useMutation } from "convex/react";
import { anyApi } from "convex/server";
import { error } from "console";

export const useMutationState = (mutationToRun: any) => {
    const [pending, setPendig] = useState 
    (false);
    const mutationFn = useMutation
    (mutationToRun)

    const mutate = (payload: any) => {
        setPendig(true)

        return mutationFn(payload).then(res =>
            {return res}).catch(error => {throw error;
            })
                .finally(() => setPendig(false))
    };

    return { mutate, pending};
};