import { Router } from "express";
import {Vote, Candidate, Election} from "../models/Vote"
import { auth } from "../utils/auth";



const router = Router();

// Create Candidate
router.post("/candidate/create", auth, async (req, res) => {
    const { election } = req.body;
    try {
        const candidate = await Candidate.create(req.body);
        await Election.findByIdAndUpdate(
            election,
            { $addToSet: { candidates: candidate.id } },
            {new:true}
         )
        return res.send(candidate);
    } catch (error) {
        res.send(error);
    }
})

// Get Candidates
router.get("/candidate", async (req, res) => {
    try {
        const candidates = await Candidate.find();
        
        res.send(candidates);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/candidate/:id", auth, async (req, res) => {
    try {
        const candidate = await Candidate.findByIdAndDelete(req.params.id);
        return res.send(candidate);
    } catch (error) {
        res.send(error);
    }
})

//election
router.post("/election/create", auth, async (req, res) => {
    try {
        const election = await Election.create(req.body);
        res.send(election);
    } catch (error) {
        res.send(error)
    }
})
router.get("/election", async (req, res) => {
    try {
        const elections = await Election.find();
        res.send(elections)
    } catch (error) {
        res.send(error);
    }
})

router.get("/election/:id", async (req, res) => {
    try {
        const election = await Election.findById(req.params.id);
        res.send(election)
    } catch (error) {
        res.send(error);
    }
})

router.post("/create", auth, async (req, res) => {
    const { election, voter, candidate } = req.body;
    if (!election || !voter || !candidate) return res.status(500).send("Include an election, voter or candidate");

    try {
        // create vote
        const vote = await Vote.create(req.body);

        // add the vote to a candidate
        await Candidate.findByIdAndUpdate(
            candidate,
            {$addToSet:{votes:vote.id}}
        ).catch((err) => {
            return res.status(500).send(err);
        })
        // add the voter to Election;
        await Election.findByIdAndUpdate(election, { $addToSet: { voters: voter } });
        res.send(vote);
    } catch (error) {
        res.send(error);
    }
})


// Get votes

// Get vote

// Update vote


// Delete vote


export {router as voteRoutes}